import config from "./util/getConfig.js"
import logger from "./util/logger.js"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const { PORT, ALLOWED_ORIGIN } = config

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  })
)
app.use(bodyParser.json())

import routes from "./routes/index.js"

app.use("/api", routes)

app.listen(PORT, () => logger.info(`App Listening on port ${PORT}`))
