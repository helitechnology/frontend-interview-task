module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom", // Ensure this is set
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Setup file to configure Jest DOM
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS imports
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Ensure TypeScript files are transformed using ts-jest
  },
};
