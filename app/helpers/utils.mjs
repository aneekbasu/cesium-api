
export function sendResponse (res,data,statusCode,status,message,page) {
  console.log(statusCode)
    let response = {}
      response.data = data || null
      response.statusCode = statusCode
      response.status = status
      response.message = message || null
      response.page = page || null
    return res.status(statusCode).json(response)
}
