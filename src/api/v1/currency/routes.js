import express from "express"
import { getCurrenciesFromSite } from "./controller.js"

const router = express.Router()

/**
 * @openapi
 * /api/v1/currency/{siteId}:
 *   get:
 *     description: Get posible currencies from site id
 *     parameters:
 *       - in: path
 *         name: siteId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return currencies array
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   $ref: '#/components/schemas/Author'
 *                 currencies:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       symbol:
 *                         type: string
 *
 *       404:
 *         description: Not results found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/:siteId", getCurrenciesFromSite)

export default router
