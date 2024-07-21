import config from "config"

export default {
  PORT: config.get("PORT"),
  MELI_API_BASE_URL: config.get("MELI_API_BASE_URL"),
  AUTHOR: config.get("AUTHOR"),
  DEFAULT_SITE: config.get("DEFAULT_SITE"),
  ALLOWED_ORIGIN: config.get("ALLOWED_ORIGIN"),
}
