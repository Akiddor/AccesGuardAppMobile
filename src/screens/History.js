import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { historialPuerta } from './Home';

const AccessHistoryScreen = () => {
  let historyItems = [];
  for (let i = 0; i < historialPuerta.length; i++) {
    historyItems.push(<Text key={i}>{historialPuerta[i]}</Text>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access history</Text>
      {historyItems}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AccessHistoryScreen;