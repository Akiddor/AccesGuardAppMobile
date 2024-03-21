import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HistoryAccess = () => {
  // Ejemplos de datos de entrada para la tabla
  const data = [
    { id: 1, timestamp: '2024-03-06 10:00:00', location: 'Oficina' },
    { id: 2, timestamp: '2024-03-06 11:30:00', location: 'Casa' },
    { id: 3, timestamp: '2024-03-06 14:15:00', location: 'PuertaTrasera' },
    { id: 4, timestamp: '2024-03-06 16:45:00', location: 'Almacen' },
    { id: 5, timestamp: '2024-03-06 18:20:00', location: 'Restaurante' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Accesos</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.accessItem}>
            <Text style={styles.accessText}>{item.timestamp}</Text>
            <Text style={styles.accessText}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accessItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  accessText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HistoryAccess;
