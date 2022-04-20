import * as alphavantage from './alphavantage'
import * as bandprotocol from './bandprotocol'
import * as chainlink from './chainlink'
import * as exchangerate from './exchangerate'
import * as fixer from './fixer'

const mocks = { ...alphavantage, ...bandprotocol, ...chainlink, ...exchangerate, ...fixer }
export default mocks
