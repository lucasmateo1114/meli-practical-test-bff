import axios from "axios"
import logger from "../../../util/logger.js"
import CustomHttpError from "../../../util/CustomHttpError.js"
import addResponseSign from "../../../util/addResponseSign.js"
import constants from "../../../common/constants.js"
import config from "../../../util/getConfig.js"
import { getCommonAdaptedProduct } from "./utils.js"
const { MELI_API_BASE_URL, DEFAULT_SITE } = config
const { PROMISE_FULFILLED } = constants
const entity = "item-controller"

const getAdaptedResponseForProducts = async (products, action) => {
  const items = []
  const categories = {}
  let maxCount = 0
  let mostRepeatedCategory

  products.forEach((product) => {
    const brand = product?.attributes?.filter(({ id }) => id === "BRAND")[0]
    items.push({
      ...getCommonAdaptedProduct(product),
      brand: brand?.value_name,
    })
    categories[product.category_id] = (categories[product.category_id] || 0) + 1
    if (categories[product.category_id] > maxCount) {
      maxCount = categories[product.category_id]
      mostRepeatedCategory = product.category_id
    }
  })

  return {
    categories: await getCategoryPathFromId(mostRepeatedCategory, action),
    items,
  }
}

const getAdaptedResponseForProduct = async (product, description, action) => ({
  item: {
    ...getCommonAdaptedProduct(product),
    sold_quantity: product.sold_quantity || 0,
    description,
    categories: await getCategoryPathFromId(product.category_id, action),
  },
})

const getCategoryPathFromId = async (categoryId, action) => {
  const module = "getCategoryPathFromId"
  try {
    const { data } = await axios.get(
      `${MELI_API_BASE_URL}/categories/${categoryId}`,
    )
    const categories = data?.path_from_root.map((path) => path.name)

    return categories
  } catch (error) {
    logger.error({ message: error.message, entity, module, action })
    return []
  }
}

export const searchItemsByTerm = async (req, res) => {
  const module = "searchItemsByTerm"
  const action = "search-items"
  const { q: query, site: incomingSite } = req.query
  const site = incomingSite || DEFAULT_SITE
  try {
    const { data } = await axios.get(
      `${MELI_API_BASE_URL}/sites/${site}/search?q=${query}`,
    )
    const adaptedResponse = await getAdaptedResponseForProducts(
      data.results,
      action,
    )

    res.send(addResponseSign(adaptedResponse))
  } catch (error) {
    logger.error({ message: error.message, entity, module, action })
    res.status(error?.response?.status || 500)
    res.send({ error: error.message })
  }
}

export const getItemById = async (req, res) => {
  const module = "getItemById"
  const action = "get-item"
  const { id } = req.params
  try {
    const [productInfoResult, productDescriptionResult] =
      await Promise.allSettled([
        axios.get(`${MELI_API_BASE_URL}/items/${id}`),
        axios.get(`${MELI_API_BASE_URL}/items/${id}/description`),
      ])
    if (productInfoResult.status !== PROMISE_FULFILLED) {
      const {
        reason: { response },
      } = productInfoResult
      throw new CustomHttpError(response, response.status, response.statusText)
    }

    const product = productInfoResult.value.data
    const productDescription =
      productDescriptionResult.status === PROMISE_FULFILLED
        ? productDescriptionResult.value.data?.plain_text
        : ""

    const adaptedResponse = await getAdaptedResponseForProduct(
      product,
      productDescription,
      action,
    )
    res.send(addResponseSign(adaptedResponse))
  } catch (error) {
    logger.error({ message: error.message, entity, module, action })
    res.status(error?.response?.status || 500)
    res.send({ error: error.message })
  }
}
