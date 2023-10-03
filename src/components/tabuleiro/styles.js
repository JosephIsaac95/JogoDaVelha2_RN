import { StyleSheet } from "react-native";

const vertical = 30;
const horizontal = 30;
const borda = 1;

const styles = StyleSheet.create({
  top: {
    width: horizontal * 3,
    height: vertical,
    container: "flex",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  mid: {
    width: horizontal * 3,
    height: vertical,
    container: "flex",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  down: {
    width: horizontal * 3,
    height: vertical,
    container: "flex",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  topleft: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderBottomWidth: borda,
    borderBottomColor: "#000"
  },
  topmid: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderBottomWidth: borda,
    borderLeftWidth: borda,
    borderBottomColor: "#000"
  },
  topright: {
    width: horizontal,
    height: vertical,
    borderBottomWidth: borda,
    borderLeftWidth: borda,
    borderBottomColor: "#000"
  },
  midleft: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderBottomWidth: borda,
    borderTopWidth: borda,
    borderBottomColor: "#000"
  },
  midmid: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderBottomWidth: borda,
    borderTopWidth: borda,
    borderLeftWidth: borda,
    borderBottomColor: "#000"
  },
  midright: {
    width: horizontal,
    height: vertical,
    borderTopWidth: borda,
    borderLeftWidth: borda,
    borderBottomWidth: borda,
    borderBottomColor: "#000"
  },
  downleft: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderTopWidth: borda,
    borderBottomColor: "#000"
  },
  downmid: {
    width: horizontal,
    height: vertical,
    borderRightWidth: borda,
    borderTopWidth: borda,
    borderLeftWidth: borda,
    borderBottomColor: "#000"
  },
  downright: {
    width: horizontal,
    height: vertical,
    borderTopWidth: borda,
    borderLeftWidth: borda,
    borderBottomColor: "#000"
  }
});

export default styles;
