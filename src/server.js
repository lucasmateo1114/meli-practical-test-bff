import config from "./util/getConfig.js"
import logger from "./util/logger.js"
import v1SwaggerDocs from "./routes/v1/swagger.js"
import app from "./app.js"
const { PORT } = config

app.listen(PORT, () => {
  logger.info(`App Listening on port ${PORT}`)
  v1SwaggerDocs(app, PORT)
})
