import supertest from "supertest"
import app from "./../../../../src/app.js"

describe("/api/v1/health route test", () => {
  it("get method should responds with status 200", async () => {
    const response = await supertest(app).get("/api/v1/health")
    expect(response.status).toEqual(200)
  })
})
