import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Passo2( { navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Coberturas desejadas:</Text>
      <TouchableOpacity style={styles.section} onPress={() => setCheck1(!check1)}>
        <Checkbox style={styles.checkbox} value={check1} color={check1 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Seca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck2(!check2)}>
        <Checkbox style={styles.checkbox} value={check2} color={check2 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Excesso de chuva pré colheita</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck3(!check3)}>
        <Checkbox style={styles.checkbox} value={check3} color={check3 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Excesso de chuva no plantio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck4(!check4)}>
        <Checkbox style={styles.checkbox} value={check4} color={check4 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Granizo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck5(!check5)}>
        <Checkbox style={styles.checkbox} value={check5} color={check5 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Geada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck6(!check6)}>
        <Checkbox style={styles.checkbox} value={check6} color={check6 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Tempestade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck7(!check7)}>
        <Checkbox style={styles.checkbox} value={check7} color={check7 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Excesso de chuva na floração (Milho e Trigo)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passo3')}>
        <Text style={styles.txtBtn}>Próximo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  txt: {
    fontSize: 15,
    color: '#333'
  },
  titulo: {
    color: '#3674F0',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 20,
  },
  checkbox: {
    margin: 10,
  },
  btn: {
    backgroundColor: '#3674F0',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 30
  },
  txtBtn: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
