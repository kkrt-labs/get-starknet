import type { StarknetWindowObject } from "@starknet-io/types-js"

export function scanObjectForWallets(
  obj: Record<string, any>,
  isWalletObject: (wallet: any) => boolean,
): StarknetWindowObject[] {
  console.log("obj", obj)
  console.log("scanObjectForWallets")
  return Object.values(
    Object.getOwnPropertyNames(obj).reduce<
      Record<string, StarknetWindowObject>
    >((wallets, key) => {
      if (key.startsWith("starknet")) {
        console.log("key", key)
        const wallet = obj[key]

        if (isWalletObject(wallet) && !wallets[wallet.id]) {
          wallets[wallet.id] = wallet
        }
      }
      console.log("wallets", wallets)
      return wallets
    }, {}),
  )
}
