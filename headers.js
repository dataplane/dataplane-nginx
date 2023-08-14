function headers_base64(r) {
  return JSON.stringify(r.headersIn).toString('base64')
}

export default {headers_base64};
