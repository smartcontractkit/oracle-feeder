import { errorHandler } from 'lib/error'
import * as logger from 'lib/logger'
import { num } from 'lib/num'
import { OnChainQuoter } from 'provider/base'

const pairToContractAddressLookup = {
  'LUNA/USD': 'terra154secslh0htss73hjv0zdmdev0jy7s0a00ehcp',
}

interface Response {
  round_id: number
  answer: string
  observations_timestamp: number
  transmission_timestamp: number
}

export class Chainlink extends OnChainQuoter {
  private async updateLastPrice(symbol: string): Promise<void> {
    const address = pairToContractAddressLookup[symbol]
    const query = 'latest_round_data'
    const params = {}

    const response = await this.lcd.wasm.contractQuery<Response>(address, query, params)

    const result = response.answer

    if (!result) {
      logger.error(
        `${this.constructor.name}: wrong api response`,
        response ? JSON.stringify(response) : 'empty'
      )
      throw new Error('Invalid response from Chainlink data feed')
    }

    this.setPrice(symbol, num(result).dividedBy(10 ** 8))
  }

  protected async update(): Promise<boolean> {
    for (const symbol of this.symbols) {
      await this.updateLastPrice(symbol).catch(errorHandler)
    }

    return true
  }
}

export default Chainlink
