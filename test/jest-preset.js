const ReactNativePreset = require("react-native/jest-preset");

module.exports = Object.assign({}, ReactNativePreset, {
  setupFiles: [require.resolve("./save-promise.js")]
    .concat(ReactNativePreset.setupFiles)
    .concat([require.resolve("./restore-promise.js")]),
});
