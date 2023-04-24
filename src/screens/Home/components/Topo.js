import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';
import {carregaTopo} from '../../../services/carregarDados';

export default function Topo() {
  const [saudacao, setSaudacao] = useState('');
  const [legenda, setLegenda] = useState('');

  useEffect(() => {
    const topo = carregaTopo();
    setSaudacao(topo.saudacao);
    setLegenda(topo.legenda);
  }, []);

  return (
    <View style={styles.topoView}>
      <Image style={styles.imagem} source={logo} />
      <Text style={styles.textSaudacao}>{saudacao}</Text>
      <Text style={styles.legenda}>{legenda}</Text>
    </View>
  );
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
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});
