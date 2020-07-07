module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src/"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,ts}",
    "!**/dist/**",
    "!**/node_modules/**",
    "!**/src/**/index.ts",
    "!**/src/**/*.d.ts"
  ],
  "coverageReporters": [
    "text"
  ],
  "setupFiles": [
    "./setupTests.ts"
  ]
};
