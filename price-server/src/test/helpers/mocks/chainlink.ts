import * as nock from 'nock'

export const setupChainlinkMocks = () => {
  nock('https://lcd.terra.dev:443', { encodedQueryParams: true })
    .get('/terra/wasm/v1beta1/contracts/terra154secslh0htss73hjv0zdmdev0jy7s0a00ehcp/store')
    .query({ query_msg: 'ImxhdGVzdF9yb3VuZF9kYXRhIg%3D%3D' })
    .reply(
      200,
      {
        query_result: {
          round_id: 72261,
          answer: '9490834111',
          observations_timestamp: 1650433672,
          transmission_timestamp: 1650433675,
        },
      },
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '134',
        'Connection',
        'close',
        'X-Server-Time',
        '1650433747',
        'X-Frame-Options',
        'SAMEORIGIN',
        'X-XSS-Protection',
        '1; mode=block',
        'X-Content-Type-Options',
        'nosniff',
        'X-Dns-Prefetch-Control',
        'off',
        'X-Download-Options',
        'noopen',
        'Access-Control-Allow-Origin',
        '*',
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers',
        'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
        'Access-Control-Expose-Headers',
        'Content-Length,Content-Range',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Set-Cookie',
        '__cfruid=b68809bf8be8106bd4f0dc65eb34d489f4a1b02e-1650433747; path=/; domain=.terra.dev; HttpOnly; Secure; SameSite=None',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb984bfdf77cf7-LAX',
        'alt-svc',
        'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
      ]
    )
}
