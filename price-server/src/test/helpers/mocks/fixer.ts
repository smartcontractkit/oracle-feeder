import * as nock from 'nock'

export const setupFixerMocks = () => {
  nock('https://data.fixer.io:443', { encodedQueryParams: true })
    .get('/api/latest')
    .query({
      access_key: '',
      symbols:
        'XDR%2CKRW%2CMNT%2CEUR%2CCNY%2CJPY%2CGBP%2CINR%2CCAD%2CCHF%2CHKD%2CAUD%2CSGD%2CTHB%2CSEK%2CDKK%2CIDR%2CPHP%2CMYR%2CNOK%2CTWD%2CUSD',
    })
    .reply(
      200,
      {
        success: false,
        error: {
          code: 101,
          type: 'missing_access_key',
          info: 'You have not supplied an API Access Key. [Required format: access_key=YOUR_ACCESS_KEY]',
        },
      },
      [
        'cache-control',
        'no-cache',
        'content-type',
        'application/json; Charset=UTF-8',
        'access-control-allow-methods',
        'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS',
        'access-control-allow-origin',
        '*',
        'x-blocked-at-loadbalancer',
        '1',
      ]
    )
}
