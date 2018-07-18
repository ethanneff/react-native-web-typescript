// app entry
import App from "./containers/App";
import Config from "./commons/Config";
import { Platform, AppRegistry } from "react-native";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);

if (Platform.OS === Config.os.web) {
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root)
  });
}
