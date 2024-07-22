import { getCommonAdaptedProduct } from "./../../../../src/api/v1/item/utils.js"

const item = {
  id: "MLA1397335395",
  title: "Smart Tv Philips 43 Fhd Google Tv Control Por Voz",
  condition: "new",
  thumbnail_id: "604576-MLU73940693748_012024",
  catalog_product_id: "MLA27280856",
  listing_type_id: "gold_pro",
  sanitized_title: "smart-tv-philips-43-fhd-google-tv-control-por-voz",
  permalink:
    "https://www.mercadolibre.com.ar/smart-tv-philips-43-fhd-google-tv-control-por-voz/p/MLA27280856",
  buying_mode: "buy_it_now",
  site_id: "MLA",
  category_id: "MLA1002",
  domain_id: "MLA-TELEVISIONS",
  thumbnail: "http://http2.mlstatic.com/D_604576-MLU73940693748_012024-I.jpg",
  currency_id: "ARS",
  order_backend: 1,
  price: 489999,
  original_price: null,
  sale_price: null,
  available_quantity: 500,
  official_store_id: 1938,
  official_store_name: "Mercado Libre Electronica",
  use_thumbnail_id: true,
  accepts_mercadopago: true,
  shipping: {
    store_pick_up: false,
    free_shipping: true,
    logistic_type: "fulfillment",
    mode: "me2",
    tags: ["fulfillment", "mandatory_free_shipping"],
    benefits: null,
    promise: null,
    shipping_score: -1,
  },
  stop_time: "2044-03-31T20:00:24.000Z",
  seller: {
    id: 608846165,
    nickname: "MERCADOLIBRE ELECTRONICA_AR",
  },
  attributes: [],
}

describe("Utils tests", () => {
  it("Should get common product object", () => {
    const {
      price: { amount, decimals, currency },
    } = getCommonAdaptedProduct(item)
    expect(amount).toEqual(489999)
    expect(decimals).toEqual(0)
    expect(currency).toEqual("ARS")
  })

  it("Should get common product object with price 0 when is missing", () => {
    const {
      price: { amount, decimals, currency },
    } = getCommonAdaptedProduct({ ...item, price: undefined })
    expect(amount).toEqual(0)
    expect(decimals).toEqual(0)
    expect(currency).toEqual("ARS")
  })
})
