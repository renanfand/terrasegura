import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Passo4 = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.titulo, { fontSize: 40, marginBottom: 20 }]}>:)</Text>
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

        <Text style={styles.titulo2}>Contato</Text>
        <Text style={styles.descricao2}>
          +55 (45) 9 8818-8281
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt}>Voltar para Inicio</Text>
        </TouchableOpacity>
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
  btn: {
    backgroundColor: '#3674F0',
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'flex-start',
  },
  txt: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default Passo4;
