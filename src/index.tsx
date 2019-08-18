import React, { memo } from "react";
import { AppRegistry, View, Text, Platform, StyleSheet } from "react-native";

const appName = "example";
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});

export const Main = memo(function Main() {
  return (
    <View style={styles.container}>
      <Text>react native with web and typescript</Text>
    </View>
  );
});

AppRegistry.registerComponent(appName, () => Main);
if (Platform.OS === "web") {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById("root")
  });
}
