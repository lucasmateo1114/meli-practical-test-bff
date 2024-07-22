import { jest } from "@jest/globals"
import supertest from "supertest"
import app from "./../../../../src/app.js"
import axios from "axios"

jest.mock("axios")

const site = {
  id: "MLA",
  name: "Argentina",
  country_id: "AR",
  sale_fees_mode: "not_free",
  mercadopago_version: 3,
  default_currency_id: "ARS",
  immediate_payment: "optional",
  payment_method_ids: [
    "MLAMP",
    "MLAWC",
    "MLAAM",
    "MLABC",
    "MLACD",
    "MLAOT",
    "MLADC",
    "MLAMO",
    "MLAWT",
    "MLAMC",
    "MLAMS",
    "MLAVS",
    "MLATB",
    "MLAVE",
  ],
  settings: {
    identification_types: ["DNI", "Otro"],
    taxpayer_types: [
      "IVA Exento",
      "IVA Responsable Inscripto",
      "Monotributo",
      "Consumidor Final",
    ],
    identification_types_rules: [
      {
        identification_type: "DNI",
        rules: [
          {
            enabled_taxpayer_types: ["Consumidor Final"],
            begins_with: "",
            type: "number",
            min_length: 8,
            max_length: 8,
          },
        ],
      },
      {
        identification_type: "Otro",
        rules: [
          {
            enabled_taxpayer_types: [
              "IVA Exento",
              "IVA Responsable Inscripto",
              "Monotributo",
            ],
            begins_with: "",
            type: "number",
            min_length: 11,
            max_length: 11,
          },
        ],
      },
    ],
  },
  currencies: [
    {
      id: "ARS",
      symbol: "$",
    },
    {
      id: "USD",
      symbol: "US$",
    },
  ],
  categories: [],
  channels: [
    "marketplace",
    "mshops",
    "private",
    "proximity",
    "point",
    "mp-merchants",
    "mp-link",
  ],
}

describe("/api/v1/currency routes test", () => {
  it("Method get should responds with status 200", async () => {
    axios.get.mockResolvedValue({ data: site })
    const response = await supertest(app).get("/api/v1/currency/MLA")
    expect(response.status).toEqual(200)
  })

  it("Method get should responds with status 404", async () => {
    axios.get.mockRejectedValue({ response: { status: 404 } })
    const response = await supertest(app).get("/api/v1/currency/MLA")
    expect(response.status).toEqual(404)
  })
})
