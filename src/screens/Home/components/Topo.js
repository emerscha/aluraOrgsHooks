import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png';

export default function Topo() {
  return (
    <View style={styles.top}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcomeText}>Olá Emerson</Text>
      <Text style={styles.subtitleText}>Encontre os melhores produtores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcomeText: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 16,
    lineHeight: 26,
  },
});
