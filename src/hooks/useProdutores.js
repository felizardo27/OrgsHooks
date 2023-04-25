import {useEffect, useState} from 'react';
import {carregaProdutores} from '../services/carregarDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const produtores = carregaProdutores();
    setTitulo(produtores.titulo);
    setLista(produtores.lista);
  }, []);

  return [titulo, lista];
}
