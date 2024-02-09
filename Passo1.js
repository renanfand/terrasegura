import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native';
import { Image } from 'react-native';

export default function Passo1({ navigation }) {
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Anexe seus documentos para avaliação!</Text>
        <Text style={styles.descricao}>
          Os seguintes documentos: Mapa da area, Matricula da terra, Analise quimica e fisica do solo, CAR;
        </Text>
      </View>
     
      <View style={styles.container2}>
        <View style={styles.input}>
          <Button title="Fazer upload dos arquivos" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 20, height: 20 }} />}
        </View>

        <Text style={styles.label}>Insira os hectare(ha):</Text>
        <TextInput style={styles.input}></TextInput>

        <Text style={styles.label}>Meio de cultura:</Text>
        <TextInput style={styles.input}></TextInput>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Passo2')}>
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
    marginBottom: 10,
  },
  container: {
    height: '35%',
    backgroundColor: '#3674F0',
    padding: 30,
    justifyContent: 'flex-end',
  },
  container2: {
    height: '75  %',
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'flex-start',
  },
});

