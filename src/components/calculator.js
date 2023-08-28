import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputAgua, setInputAgua] = useState('');
  const [inputCal, setInputCal] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    // Lógica para realizar el cálculo
    // Puedes usar los valores de 'inputValue', 'inputAgua' y 'inputCal' para operaciones
    // Aquí calculamos la suma de los tres valores
    const calculatedResult = Number(inputValue) + Number(inputAgua) + Number(inputCal);
    setResult(`Resultado: ${calculatedResult}`);
  };

  const handleClear = () => {
    setInputValue('');
    setInputAgua('');
    setInputCal('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>{result}</Text>
      <TextInput
        style={styles.input}
        placeholder="Agua"
        value={inputAgua}
        onChangeText={(text) => setInputAgua(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cal"
        value={inputCal}
        onChangeText={(text) => setInputCal(text)}
      />
      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleClear}>
        <Text style={styles.buttonText}>Limpiar</Text>
      </TouchableOpacity>  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    display: "column",
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius:10,
  },
  button: {
    alignItems: "center",
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CalculatorScreen;
