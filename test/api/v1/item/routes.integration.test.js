import supertest from "supertest"
import app from "./../../../../src/app.js"
import axios from "axios"

jest.mock("axios")

const successItemsResult = {
  site_id: "MLA",
  query: "tv",
  results: [
    {
      id: "MLA1242342909",
      title: "Noblex Dk32x7000pi Smart Tv Led 32  Color Negro",
      condition: "new",
      site_id: "MLA",
      category_id: "MLA1002",
      thumbnail:
        "http://http2.mlstatic.com/D_874885-MLU76797321097_062024-I.jpg",
      currency_id: "ARS",
      price: 451681,
      attributes: [
        {
          id: "BRAND",
          value_name: "Noblex",
        },
      ],
    },
  ],
}

const successItemResult = {
  id: "MLA1397335395",
  site_id: "MLA",
  title: "Smart Tv Philips 43 Fhd Google Tv Control Por Voz",
  seller_id: 608846165,
  category_id: "MLA1002",
  official_store_id: 1938,
  price: 489999,
  base_price: 489999,
  original_price: null,
  currency_id: "ARS",
  initial_quantity: 4104,
  buying_mode: "buy_it_now",
  listing_type_id: "gold_pro",
  condition: "new",
  permalink:
    "https://articulo.mercadolibre.com.ar/MLA-1397335395-smart-tv-philips-43-fhd-google-tv-control-por-voz-_JM",
  thumbnail_id: "604576-MLU73940693748_012024",
  thumbnail: "http://http2.mlstatic.com/D_604576-MLU73940693748_012024-I.jpg",
  shipping: {
    mode: "me2",
    methods: [],
    tags: ["mandatory_free_shipping"],
    dimensions: null,
    local_pick_up: false,
    free_shipping: true,
    logistic_type: "fulfillment",
    store_pick_up: false,
  },
}

const successCategoriesResult = {
  id: "MLA1055",
  path_from_root: [
    {
      id: "MLA1051",
      name: "Celulares y Teléfonos",
    },
    {
      id: "MLA1055",
      name: "Celulares y Smartphones",
    },
  ],
}

describe("/api/v1/items/ routes test", () => {
  it("Path / should responds with status 200 for method GET", async () => {
    axios.get.mockResolvedValueOnce({ data: successItemsResult })
    axios.get.mockResolvedValueOnce({ data: successCategoriesResult })
    const response = await supertest(app).get("/api/v1/items?search=tv")
    expect(response.status).toEqual(200)
  })

  it("Path / should responds with status 404 for method get ", async () => {
    axios.get.mockRejectedValue({ response: { status: 404 } })
    const response = await supertest(app).get("/api/v1/items?search=tv")
    expect(response.status).toEqual(404)
  })

  it("Path /{id} should responds with status 200 for method GET", async () => {
    axios.get.mockResolvedValue({ data: successItemResult })
    const response = await supertest(app).get("/api/v1/items/MLA1397335395")
    expect(response.status).toEqual(200)
  })

  it("Path /{id} should responds with status 404 for method get ", async () => {
    axios.get.mockRejectedValue({ response: { status: 404 } })
    const response = await supertest(app).get("/api/v1/items/MLA1397335395")
    expect(response.status).toEqual(404)
  })
})
