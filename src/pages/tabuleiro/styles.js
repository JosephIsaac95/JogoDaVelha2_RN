import { StyleSheet } from "react-native";

const border = 3;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  top: {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    container: "flex",
    flexDirection: "row"
  },
  mid: {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    container: "flex",
    flexDirection: "row"
  },
  down: {
    backgroundColor: "#fff",
    width: 300,
    height: 100,
    container: "flex",
    flexDirection: "row"
  },
  topleft: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderBottomWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  topmid: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderBottomWidth: border,
    borderLeftWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  topright: {
    width: 100,
    height: 100,
    borderBottomWidth: border,
    borderLeftWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  midleft: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderBottomWidth: border,
    borderTopWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  midmid: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderBottomWidth: border,
    borderTopWidth: border,
    borderLeftWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  midright: {
    width: 100,
    height: 100,
    borderTopWidth: border,
    borderLeftWidth: border,
    borderBottomWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  downleft: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderTopWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  downmid: {
    width: 100,
    height: 100,
    borderRightWidth: border,
    borderTopWidth: border,
    borderLeftWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  downright: {
    width: 100,
    height: 100,
    borderTopWidth: border,
    borderLeftWidth: border,
    borderBottomColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  jogadores: {
    width: 300,
    backgroundColor: "#fff",
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5
  },
  o: {
    backgroundColor: "#e41d1d",
    borderColor: "#fff"
  },
  x: {
    backgroundColor: "#0074e4",
    borderColor: "#fff"
  },
  celulaPreenchida: {
    backgroundColor: "#fff78e"
  },

  textPlay: {
    color: "#fff"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 20
  }
});

export default styles;
