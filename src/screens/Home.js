import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { db, ref, set } from "../../firebase-config"; 


let historialPuerta = [];
let intruso = false;

const Home = () => {
  const handlePress = async (action) => {
    try { 
      if (!db) {
        console.error("The database is not defined");
        return;
      }

      let databaseRef;
      let message;

      if (action === 'openDoor') {
        databaseRef = ref(db, "bypass");
        await set(databaseRef, "true");
        const timestamp = new Date().toISOString();
        historialPuerta = [...historialPuerta, timestamp];
        message = "The door has been opened";
      } else if (action === 'payAlarm') {
        databaseRef = ref(db, "intruso");
        await set(databaseRef, false);
        intruso = false;
        message = "The alarm was deactivated";
      }

      Alert.alert(message); // Muestra una alerta de éxito
    } catch (error) {
      console.error("Error while changing the value in the database:", error);
      Alert.alert(
        "An error occurred. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonRedon} onPress={() => handlePress('openDoor')}>
        <Text style={styles.buttonText}>Open Door</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonAlarm} onPress={() => handlePress('payAlarm')}>
        <Text style={styles.buttonText}>Turn off alarm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  buttonRedon: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, 
  },
  buttonAlarm: {
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;
export { historialPuerta, intruso };
