import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Passo3({ navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Priorizar seguradora:</Text>
      <TouchableOpacity style={styles.section} onPress={() => setCheck1(!check1)}>
        <Checkbox style={styles.checkbox} value={check1} color={check1 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Bradesco</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck2(!check2)}>
        <Checkbox style={styles.checkbox} value={check2} color={check2 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Banco do Brasil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck3(!check3)}>
        <Checkbox style={styles.checkbox} value={check3} color={check3 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Santander</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck4(!check4)}>
        <Checkbox style={styles.checkbox} value={check4} color={check4 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Sicoob</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck5(!check5)}>
        <Checkbox style={styles.checkbox} value={check5} color={check5 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Sicredi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.section} onPress={() => setCheck6(!check6)}>
        <Checkbox style={styles.checkbox} value={check6} color={check6 ? '#3674F0' : undefined}
        />
        <Text style={styles.txt}>Sem prioridade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passo4')}>
        <Text style={styles.txtBtn}>Encaminhar proposta</Text>
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
