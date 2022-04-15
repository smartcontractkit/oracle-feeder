import { LCDClient } from '@terra-money/terra.js'
import Quoter, { QuoterOptions } from './Quoter'

export class OnChainQuoter extends Quoter {
  protected lcd: LCDClient

  constructor(lcd: LCDClient, options: QuoterOptions) {
    super(options)

    this.lcd = lcd
  }
}

export default OnChainQuoter
