import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/components/Menu';
import CalculadorScreen from './src/components/calculator';
import CalcScreen from './src/components/calc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" options={{ headerShown: false }} component={Menu} />
        <Stack.Screen name="Calcular"  options={{ headerShown: false }} component={CalculadorScreen} />
        <Stack.Screen name="Calc"  options={{ headerShown: false }} component={CalcScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


