import express from "express"
import { check } from "./controller.js"

const router = express.Router()

/**
 * @openapi
 * /api/v1/health/:
 *   get:
 *     description: Validate API State
 *     responses:
 *       200:
 *         description: Returns an object with status UP
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: API status
 */
router.get("/", check)

export default router
