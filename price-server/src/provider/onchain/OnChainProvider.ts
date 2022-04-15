import * as config from 'config'
import { Provider, ProviderOptions } from 'provider/base'
import { Chainlink } from './quoter'
import { LCDClient } from '@terra-money/terra.js'

class OnChainProvider extends Provider {
  protected lcd: LCDClient

  constructor(options: ProviderOptions) {
    super(options)

    const { lcdUrl, chainId } = config.onChainProvider ?? {}

    if (lcdUrl && chainId)
      this.lcd = new LCDClient({
        URL: lcdUrl,
        chainID: chainId,
      })

    const { chainlink } = config.onChainProvider

    chainlink && this.quoters.push(new Chainlink(this.lcd, chainlink))
  }
}

export default OnChainProvider
