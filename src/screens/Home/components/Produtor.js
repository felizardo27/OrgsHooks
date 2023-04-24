import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  return (
    <View style={styles.CardView}>
      <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={styles.informacoesView}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CardView: {
    backgroundColor: '#E6E6E6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // Android
    elevation: 5,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 16,
    marginVertical: 16,
  },
  nome: {
    color: '#000',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  distancia: {
    color: '#555',
    fontSize: 12,
    lineHeight: 19,
  },
});
