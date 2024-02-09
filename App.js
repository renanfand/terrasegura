import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const YourApp = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Anexe seus documentos para avaliação!</Text>
        <Text style={styles.descricao}>
          Atravez desses arquivos shaus husa uahhshah ashaoja ashs hahshs.
          Atravez desses arquivos shaus husa uahhshah ashaoja ashs hahshs
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.label}>Fazer Upload</Text>
        <TextInput placeholder="Digite" style={styles.input}></TextInput>

        <Text style={styles.label}>DIgitalizar</Text>
        <TextInput placeholder="Digite" style={styles.input}></TextInput>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt}>Próximo</Text>
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
    marginBottom: 30,
  },
  container: {
    height: '50%',
    backgroundColor: '#3674F0',
    padding: 30,
    justifyContent: 'flex-end',
  },
  container2: {
    height: '50%',
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'flex-start',
  },
});

export default YourApp;

