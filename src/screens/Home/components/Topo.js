import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {loadTop, loadProdutores} from '../../../services/loadData';
import logo from '../../../assets/logo.png';

class Top extends React.Component {
  updateTop() {
    const ret = loadTop();
    console.log(ret);
  }

  componentDidMount() {
    //console.log('Componente Montado');
    this.updateTop();
  }

  render() {
    return (
      <View style={styles.top}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcomeText}>Olá Emerson</Text>
        <Text style={styles.subtitleText}>Encontre os melhores produtores</Text>
      </View>
    );
  }
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

export default Top;
