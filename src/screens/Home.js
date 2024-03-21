import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const getToken = async() => {
  const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    return token;
    
  }




const Home = () => {
  const handlePress = () => {
    Alert.alert('La puerta se ha abierto'); // Alert that the door has been opened
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;