import config from "./util/getConfig.js"
import logger from "./util/logger.js"
import v1WaggerDocs from "./routes/v1/swagger.js"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const { PORT, ALLOWED_ORIGIN } = config

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  }),
)
app.use(bodyParser.json())

import routes from "./routes/v1/index.js"

app.use("/api", routes)

app.listen(PORT, () => {
  logger.info(`App Listening on port ${PORT}`)
  v1WaggerDocs(app, PORT)
})
