import express from "express"
const router = express.Router()

import health from "../../api/v1/health/routes.js"
import item from "../../api/v1/item/routes.js"
import currency from "../../api/v1/currency/routes.js"

router.use("/v1/health", health)
router.use("/v1/items", item)
router.use("/v1/currency", currency)

export default router
