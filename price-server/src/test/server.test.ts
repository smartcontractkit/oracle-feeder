import * as supertest from 'supertest'
import * as http from 'http'
import { AddressInfo } from 'net'
import { createServer } from 'server'

describe('server', () => {
  let server: http.Server
  let request: supertest.SuperTest<supertest.Test>

  beforeAll(async () => {
    server = await createServer()
    request = supertest(`localhost:${(server.address() as AddressInfo).port}`)
  })

  afterAll((done) => {
    server.close(done)
  })

  describe('/health endpoint', () => {
    it('should return 200 "OK"', async () => {
      const response = await request.get('/health').expect(200)
      expect(response.text).toBe('OK')
    })
  })

  describe('/latest endpoint', () => {
    it('should return 200 with empty price data without any providers', async () => {
      const response = await request.get('/latest').expect(200)
      const result = JSON.parse(response.text)
      expect(result.prices).toStrictEqual([])
    })
  })
})
