import React, {useReducer} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../components/Estrelas';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverteSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  return (
    <TouchableOpacity onPress={inverteSelecionado} style={styles.CardView}>
      <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={styles.informacoesView}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            grande={selecionado}
            editavel={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
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
