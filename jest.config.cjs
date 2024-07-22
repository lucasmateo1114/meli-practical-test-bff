module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "test/.*\\.test\\.js$",
  collectCoverageFrom: ["src/**/*.js"],
  coveragePathIgnorePatterns: ["/test/", "/node_modules/"],
}
