import express from "express"
import { searchItemsByTerm, getItemById } from "./controller.js"

const router = express.Router()

/**
 * @openapi
 * /api/v1/items/:
 *   get:
 *     description: Get products from search term
 *     parameters:
 *       - in: query
 *         name: search
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return a object with items result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   $ref: '#/components/schemas/Author'
 *                 categories:
 *                   $ref: '#/components/schemas/Categories'
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ItemListElement'
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
router.get("/", searchItemsByTerm)

/**
 * @openapi
 * /api/v1/items/{id}:
 *   get:
 *     description: Get product from id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return a object with items result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   $ref: '#/components/schemas/Author'
 *                 item:
 *                   $ref: '#/components/schemas/ItemElement'
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
router.get("/:id", getItemById)

export default router

/**
 * @openapi
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of API creator
 *         lastname:
 *           type: string
 *           description: Lastname of API creator
 *     Categories:
 *       type: array
 *       items:
 *         type: string
 *     ItemListElement:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Item Id
 *         title:
 *           type: string
 *           description: Item title
 *         price:
 *           type: object
 *           properties:
 *             currency:
 *               type: string
 *               description: Item amount currency
 *             amount:
 *               type: integer
 *               description: Item amount
 *             decimals:
 *               type: number
 *               description: Item decimals
 *         picture:
 *           type: string
 *           description: Item image url
 *         condition:
 *           type: string
 *           description: Item condition
 *         free_shipping:
 *           type: string
 *           description: Define if item has free shipping
 *     ItemElement:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Item Id
 *         title:
 *           type: string
 *           description: Item title
 *         price:
 *           type: object
 *           properties:
 *             currency:
 *               type: string
 *               description: Item amount currency
 *             amount:
 *               type: integer
 *               description: Item amount
 *             decimals:
 *               type: number
 *               description: Item decimals
 *         picture:
 *           type: string
 *           description: Item image url
 *         condition:
 *           type: string
 *           description: Item condition
 *         free_shipping:
 *           type: string
 *           description: Define if item has free shipping
 *         sold_quantity:
 *           type: integer
 *           description: sold units of the item
 *         description:
 *           type: string
 *           description: Item description
 *         categories:
 *           $ref: '#/components/schemas/Categories'
 *
 *
 */
