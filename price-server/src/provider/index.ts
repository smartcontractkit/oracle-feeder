import * as config from 'config'
import * as bluebird from 'bluebird'
import { errorHandler } from 'lib/error'
import { Provider } from './base'
import { report } from './reporter'
import FiatProvider from './fiat/FiatProvider'
import CryptoProvider from './crypto/CryptoProvider'
import LunaProvider from './crypto/LunaProvider'
import OnChainProvider from './onchain/OnChainProvider'

export const fiatProvider = new FiatProvider(config.fiatProvider)
export const cryptoProvider = new CryptoProvider(config.cryptoProvider)
export const lunaProvider = new LunaProvider(config.lunaProvider)
export const onChainProvider = new OnChainProvider(config.onChainProvider)

const providers: Provider[] = [fiatProvider, cryptoProvider, lunaProvider, onChainProvider]

export async function initialize(): Promise<void> {
  for (const provider of providers) {
    await provider.initialize()
  }
}

export async function terminate(): Promise<void> {
  for (const provider of providers) {
    await provider.terminate()
  }
}

export async function tick(now: number): Promise<void> {
  await bluebird.mapSeries(providers, (provider) => provider.tick(now)).catch(errorHandler)

  report(now)
}
