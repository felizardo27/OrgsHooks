import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import useProdutores from './src/hooks/useProdutores';
import Cesta from './src/screens/Cesta';

export default function App() {
  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      {/* <Home melhoresProdutores={false} /> */}
      {produtores.length > 0 && (
        <Cesta
          produtor={{nome: produtores[0].nome, imagem: produtores[0].imagem}}
          {...produtores[0].cestas[0]}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
