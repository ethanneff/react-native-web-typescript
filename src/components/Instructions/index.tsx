import * as React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    color: "#333333",
    textAlign: "center",
    marginBottom: 5
  }
});

interface Props {
  instructions: string;
}

export const Instructions = ({ instructions }: Props) => (
  <>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>
      To get started, edit ./src/containers/App/index.tsx
    </Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </>
);
