import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Collapsible from 'react-native-collapsible';
import * as WebBrowser from 'expo-web-browser';

export default function Match({ navigation }) {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('http://172.20.10.6:3000');
    setResult(result);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Ola, Benedito!</Text>
        <Text style={styles.descricao}>
          Bem vindo ao TerraSegura!
        </Text>
      </View>

      <View style={styles.container2}>

        <TouchableOpacity style={[styles.btn, { marginBottom: 20 }]} onPress={_handlePressButtonAsync} >
          <Text style={styles.txt}>Planejamento agricula</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.btn, { marginBottom: 20 }]} onPress={() => navigation.navigate('Passo1')}>
          <Text style={styles.txt}>Contratação de seguro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn]} onPress={() => {}}>
          <Text style={styles.txt}>Visualizar propostas</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    color: '#777',
    fontSize: 16,
    marginBottom: 7,
  },
  btn: {
    backgroundColor: '#3674F0',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'flex-start',
  },
  txt: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  titulo: {
    color: '#f1f1f1',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    color: '#f1f1f1',
    fontSize: 14,
    marginBottom: 10,
  },
  container: {
    height: '35%',
    backgroundColor: '#3674F0',
    padding: 30,
    justifyContent: 'flex-end',
  },
  container2: {
    height: '65%',
    backgroundColor: '#fff',
    padding: 30,
  },
});