import {useState, useEffect} from 'react';
import {carregaTextos} from '../services/carregaDados';

export default function useTextos() {
  const [textos, setTextos] = useState({});

  useEffect(() => {
    const retorno = carregaTextos();
    setTextos(retorno);
  }, []);

  return textos;
}
