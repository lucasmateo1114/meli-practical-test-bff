class CustomHttpError extends Error {
  constructor(response, status, message) {
    super(message)
    this.response = response
    this.status = status
  }
}

export default CustomHttpError
