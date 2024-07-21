import axios from 'axios'
import logger from '../../util/logger.js'
import addResponseSign from '../../util/addResponseSign.js'
import config from './../../util/getConfig.js'
const { MELI_API_BASE_URL, DEFAULT_SITE } = config
const entity = "currency-controller"

export const getCurrenciesFromSite = async (req, res) => {
    const module = 'getCurrenciesFromSite'
    const action = 'get-currency'
    const { siteId } = req.query
    const site = siteId || DEFAULT_SITE
    try{
        const { data: { currencies } } = await axios.get(`${MELI_API_BASE_URL}/sites/${site}`)
        res.send(addResponseSign({ currencies }))
    }catch(error){
        logger.error({ message : error.message, entity, module, action})
        res.status(error?.response?.status || 500)
        res.send({ error : error.message })
    }
}

