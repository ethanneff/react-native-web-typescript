// app entry
import { AppRegistry, Platform } from "react-native";
import { App } from "./screens";
import { Config } from "./utils";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);

// register the web
if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root)
  });
}
