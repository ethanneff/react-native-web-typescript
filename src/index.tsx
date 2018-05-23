// web entry
import App from "./containers/App";
import { Platform, AppRegistry } from "react-native";

const APP_NAME = "example";
const WEB_ROOT = "root";
const WEB_NAME = "web";

// register the app
AppRegistry.registerComponent(APP_NAME, () => App);
if (Platform.OS === WEB_NAME) {
  AppRegistry.runApplication(APP_NAME, {
    rootTag: document.getElementById(WEB_ROOT)
  });
}
