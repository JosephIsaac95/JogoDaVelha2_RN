import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import Tabuleiro from "./pages/tabuleiro";

function App() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Jogo da Velha 2</Text>
      <Tabuleiro />
    </View>
  );
}

export default App;
