const {
  addWebpackAlias,
  babelInclude,
  fixBabelImports,
  override
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("module-resolver", {
    alias: {
      "^react-native$": "react-native-web"
    }
  }),
  addWebpackAlias({
    "react-native": "react-native-web",
    "react-native-svg": "svgs" // not necessary unless you wanted to do this
  }),
  babelInclude([
    path.resolve("src") // make sure you link your own source
    // any react-native modules you need babel to compile
    // path.resolve("node_modules/react-native-indicators"),
    // path.resolve("node_modules/react-native-popup-menu"),
    // path.resolve("node_modules/react-native-vector-icons"),
    // path.resolve("node_modules/react-native-web-linear-gradient"),
    // path.resolve("node_modules/react-router-native")
  ])
);
