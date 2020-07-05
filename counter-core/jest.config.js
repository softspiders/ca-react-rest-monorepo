module.exports = {
  //  Typescript (ts-jest)
  preset: 'ts-jest',
  testEnvironment: 'node',
  //  Coverage
  "collectCoverageFrom": [
    "src/**/*.{js,ts}",
    "!**/node_modules/**",
    "!**/src/**/index.ts",
    "!**/src/**/*.d.ts",
    "not dead"
  ],
  "coverageReporters": [
    "text"
  ]
};
