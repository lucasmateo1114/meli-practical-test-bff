import addResponseSign from "../../src/util/addResponseSign.js"

describe("AddResponseSign function", () => {
  it("Should return an object with sign", () => {
    const sampleObject = {
      greeting: "Hi!",
    }
    const signedObject = addResponseSign(sampleObject)
    expect(signedObject.author.name).toEqual("name")
  })
})
