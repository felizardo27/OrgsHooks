import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AppRotas from './src/routes/AppRotas';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
