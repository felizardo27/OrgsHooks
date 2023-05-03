import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useTextos from '../../hooks/useTextos';

import VoltarSVG from '../../assets/voltar.svg';
import sucesso from '../../assets/sucesso.png';

export default function Resumo() {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    mensagemCompra,
    topoCompra,
    tituloCompra,
    botaoHomeCompra,
    botaoProdutorCompra,
  } = useTextos();

  const nomeCompra = route.params?.compra.nome;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <TouchableOpacity style={styles.topoVoltar} onPress={() => {}}>
          <VoltarSVG />
        </TouchableOpacity>
        <Text style={styles.topoTexto}>{topoCompra}</Text>
      </View>
      <View style={styles.conteudo}>
        <Image source={sucesso} style={styles.sucesso} />

        <View style={styles.textos}>
          <Text style={styles.titulo}>{tituloCompra}</Text>
          <Text style={styles.mensagem}>{mensagemCompleta}</Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.popToTop()}>
            <Text style={styles.textoBotao}>{botaoHomeCompra}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.botao, styles.botaoProdutor]}
            onPress={() => navigation.pop(2)}>
            <Text style={[styles.textoBotao, styles.textoBotaoProdutor]}>
              {botaoProdutorCompra}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topo: {
    width: '100%',
    height: 58,
    zIndex: 1,
    position: 'absolute',
    backgroundColor: '#FFF',
    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android
    elevation: 5,
    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  conteudo: {
    zIndex: 0,
  },
  sucesso: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  mensagem: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  botaoProdutor: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  textoBotaoProdutor: {
    color: '#464646',
  },
});
