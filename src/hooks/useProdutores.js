import {useEffect, useState} from 'react';
import {carregaProdutores} from '../services/carregarDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const produtores = carregaProdutores();
    produtores.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    setTitulo(produtores.titulo);
    setLista(produtores.lista);
  }, []);

  return [titulo, lista];
}
