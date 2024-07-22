const getPriceFields = (number) => {
  if (!number) {
    return {
      amount: 0,
      decimals: 0,
    }
  }

  return {
    amount: Math.trunc(number),
    decimals: parseFloat((number % 1).toFixed(2)),
  }
}

export const getCommonAdaptedProduct = (product) => {
  return {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      ...getPriceFields(product.price),
    },
    picture: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping?.free_shipping,
  }
}
