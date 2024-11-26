import type { VirtualWallet } from "../../types"
import { createKakarotVirtualWallets } from "./kakarotVirtualWallet"
import { metaMaskVirtualWallet } from "./metaMaskVirtualWallet"
import type { StarknetWindowObject } from "@starknet-io/types-js"

console.log("metaMaskVirtualWallet", metaMaskVirtualWallet)
const virtualWallets: VirtualWallet[] = [metaMaskVirtualWallet]

function initiateVirtualWallets(windowObject: Record<string, unknown>) {
  // // Initiate all Kakarot Virtual Wallets wrapping ETH wallet providers
  createKakarotVirtualWallets(windowObject)

  console.log("initiateVirtualWallets", windowObject)
  // Initiate all other virtual wallets
  virtualWallets.forEach(async (virtualWallet) => {
    const hasSupport = await virtualWallet.hasSupport(windowObject)
    if (hasSupport) {
      console.log("hasSupport", virtualWallet)
      windowObject[virtualWallet.windowKey] = virtualWallet
    }
  })
}

const virtualWalletsMap: Record<string, StarknetWindowObject> = {}

async function resolveVirtualWallet(
  windowObject: Record<string, unknown>,
  virtualWallet: VirtualWallet,
) {
  console.log("resolveVirtualWallet", virtualWallet)
  let wallet: StarknetWindowObject = virtualWalletsMap[virtualWallet.id]
  if (!wallet) {
    wallet = await virtualWallet.loadWallet(windowObject)
    virtualWalletsMap[virtualWallet.id] = wallet
  }
  console.log("virtualWalletsMap", virtualWalletsMap)

  return wallet
}

export { initiateVirtualWallets, resolveVirtualWallet }
