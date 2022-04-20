import { Chainlink } from '../../../provider/onchain/quoter'
import { LCDClient } from '@terra-money/terra.js'
import mocks from '../../helpers/mocks'

describe('OnChain Quoter - Chainlink', () => {
  describe('Update data', () => {
    it('correctly fills price', async () => {
      mocks.setupChainlinkMocks()
      const lcd = new LCDClient({
        URL: 'https://lcd.terra.dev',
        chainID: 'columbus-5',
      })
      const quoter = new Chainlink(lcd, { symbols: ['LUNA/USD'], interval: 1000, timeout: 10000 })
      await quoter.tick(Date.now())
      const lunaUSD = quoter.getPrice('LUNA/USD')
      expect(lunaUSD?.toString()).toStrictEqual('94.90834111')
    })
  })
})
