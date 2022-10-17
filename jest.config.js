module.exports = {
  preset: "react-native",
  transformIgnorePatterns: ["node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation/(.*))"],
  setupFiles: ["<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect", "./jest.setup.js"],
  clearMocks: true,
  moduleDirectories: ["<rootDir>/node_modules", "<rootDir>/test"],
  transform: {},
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
