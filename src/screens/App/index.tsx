import * as React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Instructions, Welcome } from "../../components";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  }
});

export const App = () => {
  const instructions = Platform.select({
    android:
      "Double tap R on your keyboard to reload,\nShake or press menu button for dev menu",
    ios: "Press Cmd+R to reload,\nCmd+D or shake for dev menu"
  });

  return (
    <SafeAreaView style={styles.container}>
      <Instructions instructions={instructions} />
      <Welcome name="Human" enthusiasmLevel={1} />
    </SafeAreaView>
  );
};
