import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

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


export default CalculatorScreen;
