import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Soluciones</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Calc')}
        >
          <Text style={styles.menuText}>Calcular </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Calcular')}
        >
          <Text style={styles.menuText}>Guia de uso </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.menuText}>Reportes </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.version}>v1.0 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Ajusta el espacio entre los contenidos
    alignItems: 'center',
    backgroundColor: '#EADDFF',
    paddingTop: 40, // Espacio para la StatusBar
    paddingBottom: 20, // Espacio para la versión
  },
  titleContainer: {
    display:"column",
    marginTop: 20, // Ajusta el espacio arriba del título
    marginBottom: 20,
    alignItems:"center",
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  versionContainer: {
    marginBottom: 20, // Ajusta el espacio debajo de la versión
    marginTop:20,
  },
  title: {
    fontSize: 32,
    color:'#4F378B',
    fontFamily: 'Roboto',
  },
  menuItem: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
    width: 250,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  menuText: {
    fontSize: 14,
    color: '#4F378B',
  },
  version: {
    fontSize: 10,
    color: '#333',
  },
});

export default Menu;
