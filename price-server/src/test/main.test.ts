import * as supertest from 'supertest'
import * as process from 'process'
import * as nock from 'nock'
import * as http from 'http'
import { AddressInfo } from 'net'
import { createServer } from 'server'
import { initialize, terminate } from 'provider'
import mocks from './helpers/mocks'

describe('main', () => {
  let server: http.Server
  let request: supertest.SuperTest<supertest.Test>

  beforeAll(async () => {
    if (process.env.RECORD) {
      nock.recorder.rec()
    }

    await initialize()
    server = await createServer()
    request = supertest(`localhost:${(server.address() as AddressInfo).port}`)

    for (const mock in mocks) {
      mocks[mock]()
    }
  })

  afterAll((done) => {
    if (process.env.RECORD) {
      nock.recorder.play()
    }

    nock.restore()
    nock.cleanAll()
    nock.enableNetConnect()

    terminate()
    server.close(done)
  })

  describe('/latest endpoint', () => {
    it('should return 200 with price data using the default config', async () => {
      const response = await request.get('/latest').expect(200)
      const result = JSON.parse(response.text)
      expect(result.prices.length).toStrictEqual(22)
    })
  })
})
