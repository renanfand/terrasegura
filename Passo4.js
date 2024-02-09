import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const YourApp = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.titulo, {fontSize: 40, marginBottom: 20}]}>:)</Text>
        <Text style={styles.titulo}>Proposta encaminhada para analise!</Text>
        <Text style={styles.descricao}>
          As segurados tem um prazo de 7 dias uteis para avaliar sua proposta. Para mais informações entre em contato com a gente.
        </Text>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.titulo2}>Fale conosco</Text>
        <Text style={styles.descricao2}>
          Segunda a Sexta | 8h às 18h
        </Text>

        <Text style={styles.titulo2}>Contado</Text>
        <Text style={styles.descricao2}>
          +55 (45) 9 8818-8281
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    color: '#f1f1f1',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titulo2: {
    color: '#427BEC',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    color: '#f1f1f1',
    fontSize: 14,
    marginBottom: 30,
  },
   descricao2: {
    color: '#777',
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
