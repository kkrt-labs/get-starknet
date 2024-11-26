import { VirtualWallet } from "../../types"
import { KakarotAdapter } from "@kakarot-adapters/core"
import { KakarotWalletDetails } from "@kakarot-adapters/core/src/adapter"
import {
  RpcMessage,
  StarknetWindowObject,
  WalletEventHandlers,
} from "@starknet-io/types-js"
import { Mutex } from "async-mutex"
import { EIP6963ProviderDetail, createStore } from "mipd"

class KakarotVirtualWallet implements VirtualWallet {
  id: string
  name: string
  icon: string
  windowKey: string
  private walletLogic: KakarotAdapter | null = null
  swo: StarknetWindowObject | null = null
  lock: Mutex

  constructor(ethProvider: EIP6963ProviderDetail) {
    this.icon = ethProvider.info.icon
    this.name = `${ethProvider.info.name} (via Kakarot)`
    this.id = ethProvider.info.rdns
    this.windowKey = `starknet_kakarot_${ethProvider.info.rdns}`
    this.lock = new Mutex()

    if (ethProvider.provider) {
      const details: KakarotWalletDetails = {
        id: ethProvider.info.rdns,
        name: ethProvider.info.name,
        icon: ethProvider.info.icon,
      }
      this.walletLogic = new KakarotAdapter(ethProvider.provider, details)
    }
  }

  async loadWallet(
    windowObject: Record<string, unknown>,
  ): Promise<StarknetWindowObject> {
    if (!this.walletLogic) {
      throw new Error("No Kakarot provider found")
    }

    console.log("loadWallet", this.name)

    const wrapper: StarknetWindowObject = {
      id: this.id,
      name: this.name,
      icon: this.icon,
      version: "1.0.0",
      request: this.request.bind(this),
      on: () => {},
      off: () => {},
    }

    return wrapper
  }

  async hasSupport(windowObject: Record<string, unknown>) {
    return true
  }

  async request<Data extends RpcMessage>(
    arg: Omit<Data, "result">,
  ): Promise<Data["result"]> {
    const { type } = arg
    console.log("request", type)
    return this.lock.runExclusive(async () => {
      if (!this.swo) {
        this.swo = await this.loadWallet(window)
      }
      if (!this.walletLogic) {
        throw new Error("No Kakarot wallet logic found")
      }
      return this.walletLogic.request(arg) as unknown as Data["result"]
    })
  }

  // Kakarot Adapted Wallets do not support `on` and `off` method
  on() {}
  off() {}
}

async function createKakarotVirtualWallets(
  windowObject: Record<string, unknown>,
) {
  console.time("detectProviders")
  const store = createStore()
  const providers = store.getProviders()
  console.timeEnd("detectProviders")

  for (const provider of providers) {
    console.time(`provider: ${provider.info.name}`)
    const virtualWallet = new KakarotVirtualWallet(provider)
    windowObject[virtualWallet.windowKey] = virtualWallet
    console.timeEnd(`provider: ${provider.info.name}`)
  }
}

export { createKakarotVirtualWallets }
