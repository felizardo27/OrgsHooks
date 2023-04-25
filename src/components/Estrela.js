import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrelaPreenchida from '../assets/estrela.png';
import estrelaVazia from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const styles = stylesFunction(grande);

  const getImage = index => {
    if (preenchida) {
      return estrelaPreenchida;
    }
    return estrelaVazia;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image source={getImage()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });
