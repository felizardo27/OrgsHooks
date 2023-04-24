import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {carregaProdutores} from '../../../services/carregarDados';

export default function Produtores() {
  useEffect(() => {
    const produtores = carregaProdutores();
    console.log(produtores);
  }, []);

  return <Text>Produtores</Text>;
}
