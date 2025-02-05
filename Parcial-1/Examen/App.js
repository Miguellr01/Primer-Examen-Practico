// Link de imagen https://logodownload.org/wp-content/uploads/2018/06/nfl-logo.png

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const validateAndSubmit = () => {
    if (!/^[0-9]+$/.test(id)) {
      Alert.alert('Error', 'El ID debe contener solo números.');
      return;
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(name)) {
      Alert.alert('Error', 'El Nombre debe contener solo letras.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Error', 'El Email no es válido.');
      return;
    }
    if (!/^[0-9]{10,}$/.test(phone)) {
      Alert.alert('Error', 'El Teléfono debe tener al menos 10 dígitos.');
      return;
    }

    setSubmittedData({ id, name, email, phone });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://logodownload.org/wp-content/uploads/2018/06/nfl-logo.png' }} style={styles.image} />
      <Text style={styles.staticText}>Complete el formulario con sus datos</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>ID:</Text>
        <TextInput style={styles.input} value={id} onChangeText={setId} keyboardType="numeric" />
        
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
        
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        
        <TouchableOpacity style={styles.button} onPress={validateAndSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
      
      {submittedData && (
        <View style={styles.result}>
          <Text>ID: {submittedData.id}</Text>
          <Text>Nombre: {submittedData.name}</Text>
          <Text>Email: {submittedData.email}</Text>
          <Text>Teléfono: {submittedData.phone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f3f4',
  },
  image: {
    width: 150,
    height: 190,
    marginBottom: 20,
  },
  staticText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '100%',
  }
});

export default App;