import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../services/carregarDados';

class Topo extends React.Component {
  atualizaTopo() {
    const topo = carregaTopo();
    console.log(topo);
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={styles.topoView}>
        <Image style={styles.imagem} source={logo} />
        <Text style={styles.textSaudacao}>Olá João</Text>
        <Text style={styles.legenda}>Encontre os melhores produtores</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topoView: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  textSaudacao: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
    color: '#000',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
