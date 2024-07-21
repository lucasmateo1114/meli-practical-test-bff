import config from '../util/getConfig.js'
const { AUTHOR: {
    NAME, LASTNAME
} } = config

export default (response) => {
    return {
        author: {
            name: NAME,
            lastname: LASTNAME
        },
        ...response
    }
}