import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function MiniTabuleiro() {
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.topleft}></View>
        <View style={styles.topmid}></View>
        <View style={styles.topright}></View>
      </View>
      <View style={styles.mid}>
        <View style={styles.midleft}></View>
        <View style={styles.midmid}></View>
        <View style={styles.midright}></View>
      </View>
      <View style={styles.down}>
        <View style={styles.downleft}></View>
        <View style={styles.downmid}></View>
        <View style={styles.downright}></View>
      </View>
    </View>
  );
}

export default MiniTabuleiro;
