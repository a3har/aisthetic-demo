import { camelizeKeys } from "humps"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

const getBaseConfig = async (options = {}) => {
  const {
    external = false,
    skipContentType = false,
    skipAuth = false,
  } = options
  let authToken = null
  if (!skipAuth) {
    authToken = cookies().get("session").value
  }

  return {
    headers: {
      ...(!skipContentType ? { "Content-Type": "application/json" } : {}),
      ...(authToken && !external && !skipAuth
        ? { Authorization: `Bearer ${authToken}` }
        : {}),
    },
    cache: "no-store",
  }
}

const BASE_URL =
  `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/` ||
  "http://localhost:3010/api/"

async function get(url, options = {}) {
  const baseConfig = await getBaseConfig(options)
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
  const baseConfig = await getBaseConfig(options)
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
  const baseConfig = await getBaseConfig(options)
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

async function patch(url, params, options) {
  const baseConfig = await getBaseConfig(options)
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

// Prefixed with underscore because delete is a reserved word in javascript
async function _delete(url, params, options) {
  const baseConfig = await getBaseConfig(options)
  const requestOptions = {
    method: "DELETE",
    ...baseConfig,
    ...options,
    headers: { ...baseConfig.headers, ...options?.headers },
    body: typeof params == "object" ? JSON.stringify(params) : params,
  }
  return fetch(getUrl(url), requestOptions).then((res) =>
    handleResponse(res, options)
  )
}

// Helper Functions
function handleResponse(
  response,
  options = { useNextResponse: true, revalidate: null }
) {
  const { useNextResponse = true, revalidate } = options
  return response.text().then((text) => {
    let data = null
    try {
      data = text && JSON.parse(text)
    } catch (err) {
      console.log("ERROR IN HANDLE RESPONSE SERVER: ", err)
      return Promise.reject(err)
    }

    const isOk = response.ok
    if (!isOk) {
      const error = data || response
      if (useNextResponse) {
        return NextResponse.json(error, {
          status: response.status,
        })
      }
      return Promise.reject(error)
    }

    if (revalidate) {
      if (Array.isArray(revalidate)) {
        revalidate.forEach((path) => setTimeout(() => revalidatePath(path)))
      } else {
        setTimeout(() => revalidatePath(revalidate))
      }
    }

    data = camelizeKeys(data)
    if (useNextResponse) {
      return NextResponse.json(data)
    }

    return data
  })
}

function getUrl(url) {
  if (url.startsWith("http")) {
    return url
  }

  if (url.startsWith("/")) {
    return `${BASE_URL}${url.slice(1)}`
  }

  return `${BASE_URL}${url}`
}

const gateway = {
  get,
  post,
  put,
  patch,
  delete: _delete,
}

export default gateway
