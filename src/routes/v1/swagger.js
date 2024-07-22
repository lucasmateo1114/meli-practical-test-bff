import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import logger from "../../util/logger.js"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mercado Libre API",
      version: "1.0.0",
    },
  },
  apis: [
    "src/api/v1/health/routes.js",
    "src/api/v1/item/routes.js",
    "src/api/v1/currency/routes.js",
  ],
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send(swaggerSpec)
  })
  logger.info("Version 1.0.0 available at /api/v1/docs")
}

export default swaggerDocs
