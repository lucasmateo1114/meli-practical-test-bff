import config from "./util/getConfig.js"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const { ALLOWED_ORIGIN } = config

app.use(
  cors({
    origin: ALLOWED_ORIGIN,
  }),
)
app.use(bodyParser.json())

import routes from "./routes/v1/index.js"

app.use("/api", routes)

export default app
