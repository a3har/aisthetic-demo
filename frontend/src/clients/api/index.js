const getBaseConfig = (options = {}) => {
  const { skipContentType = false } = options
  return {
    headers: {
      ...(!skipContentType ? { "Content-Type": "application/json" } : {}),
    },
  }
}

async function get(url, options) {
  const baseConfig = getBaseConfig(options)
  const requestOptions = {
    method: "GET",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
  }
  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

async function post(url, params, options = {}) {
  const baseConfig = getBaseConfig(options)
  const { headers } = options
  const requestOptions = {
    method: "POST",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...headers },
    body: typeof params == "object" ? JSON.stringify(params) : params,
  }

  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

async function put(url, params, options) {
  const baseConfig = getBaseConfig(options)
  const requestOptions = {
    method: "PUT",
    ...getBaseConfig(),
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
    body: typeof params == "object" ? JSON.stringify(params) : params,
  }
  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

// Prefixed with underscore because delete is a reserved word in javascript
async function _delete(url, options = {}) {
  const baseConfig = getBaseConfig(options)
  const requestOptions = {
    method: "DELETE",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
  }
  try {
    const res = await fetch(getUrl(url), requestOptions).then((res) =>
      handleResponse(res, options)
    )
    return res
  } catch (err) {
    return Promise.reject(err)
  }
}

async function patch(url, params, options) {
  const baseConfig = getBaseConfig(options)
  const requestOptions = {
    method: "PATCH",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
    body: typeof params == "object" ? JSON.stringify(params) : params,
  }
  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

//Helper Functions
function handleResponse(response, options = {}) {
  return response.text().then((text) => {
    let data = null
    try {
      data = text && JSON.parse(text)
    } catch (err) {}

    if (!response.ok) {
      return Promise.reject({
        error: data || {},
        status: response.status,
        statusText: response.statusText,
      })
    }

    return data
  })
}

function getUrl(url) {
  if (
    url.startsWith("http") ||
    url.startsWith("/") ||
    url.startsWith("https")
  ) {
    return url
  }

  return `/${url}`
}

const api = {
  get,
  post,
  put,
  delete: _delete,
  patch,
}

export default api
