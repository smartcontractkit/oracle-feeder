import * as nock from 'nock'

export const setupAlphavantageMocks = () => {
  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'XDR',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983a5abe5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'KRW',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983c3f1e5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'MNT',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983cf8ef5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'EUR',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983dfb6b5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'CNY',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff',
        '03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983eedc35295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'JPY',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:05 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb983f9f315295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'GBP',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb984048885295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'INR',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98410a495295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'CAD',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9841cc465295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'CHF',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff',
        '03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98428e075295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'HKD',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98433fcd5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'AUD',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b0800000000000003000000ffff',
        '14cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9843e9905295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'SGD',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9844bb5c5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'THB',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98457d1f5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'SEK',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:06 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98463e965295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'DKK',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9846e8255295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'IDR',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9847c9de5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'PHP',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b0800000000000003000000ffff',
        '14cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98487ba15295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'MYR',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Vary',
        'Cookie',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb98491ce45295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'NOK',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'Allow',
        'GET, HEAD, OPTIONS',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb9849be235295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )

  nock('https://www.alphavantage.co:443', { encodedQueryParams: true })
    .get('/query')
    .query({
      function: 'CURRENCY_EXCHANGE_RATE',
      from_currency: 'USD',
      to_currency: 'TWD',
      apikey: '',
    })
    .reply(
      200,
      [
        '1f8b080000000000000314cbb10e82301006e09da7f8838b0e16e3c8e6e0c060c22b5ce0a40da56dee0e0831bebbf1dbbf4f0500f553240b5eac4a13d72d6af38c42420b1b0ba884990f0445481bc530220b96a01ad2e4d04726650c91c28223af82b730e3d177f8af9c70f66645dba6d9f7dd512c9e364a4613bb2137ba9692c59a1395709df9b8387406f5798d238c6646645598a784fb0dca434ea3babafafe000000ffff03007b936ec4bd000000',
      ],
      [
        'Date',
        'Wed, 20 Apr 2022 05:49:07 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'keep-alive',
        'X-Frame-Options',
        'SAMEORIGIN',
        'Vary',
        'Cookie',
        'Allow',
        'GET, HEAD, OPTIONS',
        'Via',
        '1.1 vegur',
        'CF-Cache-Status',
        'DYNAMIC',
        'Expect-CT',
        'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
        'Server',
        'cloudflare',
        'CF-RAY',
        '6feb984a8ffa5295-LAX',
        'Content-Encoding',
        'gzip',
      ]
    )
}
