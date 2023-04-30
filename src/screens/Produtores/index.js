import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import Produtor from './components/Produtor';
import Topo from './components/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';

export default function Produtores({melhoresProdutores}) {
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores} = useTextos();

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        <Text style={styles.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({item}) => <Produtor {...item} aoPressionar={() => {}} />}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
