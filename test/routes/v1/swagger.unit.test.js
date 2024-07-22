import supertest from "supertest"
import app from "../../../src/app.js"
import swaggerDocs from "../../../src/routes/v1/swagger.js"

describe("/api/v1/docs routes test", () => {
  it("Get method should responds with status 200", async () => {
    swaggerDocs(app)
    const response = await supertest(app).get("/api/v1/docs.json")
    expect(response.status).toEqual(200)
  })
})
