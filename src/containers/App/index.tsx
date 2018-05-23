import * as React from "react";
import { Platform, StyleSheet, Text, View, AppRegistry } from "react-native";
import Hello from "../../components/Hello";

const instructions = Platform.select({
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu"
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Hello name="bob" enthusiasmLevel={1} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("example", () => App);

export default App;
