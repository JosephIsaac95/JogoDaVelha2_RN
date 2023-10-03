import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./styles";
import MiniTabuleiro from "../../components/tabuleiro";

function Tabuleiro() {
  const [play, setPlay] = React.useState("1"); //1 ou 2;
  const [showModal, setShowModal] = React.useState(false);

  //React.useEffect(() => {}, []);

  const modalAction = () => {
    setShowModal(false);
    console.log(play + " antes do if");
    if (play === 1) {
      setPlay(2, () => {
        console.log(play + " Em if");
        // Esta função de retorno de chamada será executada após a atualização do estado
        // Aqui você pode realizar ações que dependem do novo valor de 'play'
      });
    } else {
      setPlay(1, () => {
        console.log(play + " Em else");
        // Função de retorno de chamada para o segundo caso
      });
    }
    console.log(play + " Depois do if");
  };

  function MensagemDeVez({ play }) {
    return (
      <Text style={styles.textPlay}>
        {play === 1 ? "Vez do Jogador 1 - O" : "Vez do Jogador 2 - X"}
      </Text>
    );
  }

  return (
    <View>
      <View>
        <View style={styles.top}>
          <TouchableOpacity
            style={styles.topleft}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topmid}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topright}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
        </View>
        <View style={styles.mid}>
          <TouchableOpacity
            style={styles.midleft}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.midmid}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.midright}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
        </View>
        <View style={styles.down}>
          <TouchableOpacity
            style={styles.downleft}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.downmid}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.downright}
            onPress={() => setShowModal(true)}
          >
            <MiniTabuleiro />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.jogadores, play === 1 ? styles.o : styles.x]}>
        <MensagemDeVez play={play} />
      </View>
      <View style={styles.jogadores}>
        <Text>Jogador 1 - O</Text>
        <Text>Jogador 2 - X</Text>
      </View>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.topleft}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.topmid}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.topright}
              onPress={modalAction}
            ></TouchableOpacity>
          </View>
          <View style={styles.mid}>
            <TouchableOpacity
              style={styles.midleft}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.midmid}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.midright}
              onPress={modalAction}
            ></TouchableOpacity>
          </View>
          <View style={styles.down}>
            <TouchableOpacity
              style={styles.downleft}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.downmid}
              onPress={modalAction}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.downright}
              onPress={modalAction}
            ></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Tabuleiro;
