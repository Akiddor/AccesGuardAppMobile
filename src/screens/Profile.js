import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login'); // Navega a la pantalla de inicio de sesión
  };

  const profilePicture = "https://pbs.twimg.com/media/GKxnSSVaoAAVQo4?format=jpg&name=small";
  return (
    <View style={styles.container}>
      {/* Sección de la foto */}
      <View style={styles.photoContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: profilePicture }} style={styles.avatar} />
        </View>
        <Text style={styles.name}>AccessGuard</Text>
      </View>

      {/* Sección de las estadísticas */}
      <View style={styles.statsContainer}>
        <View style={styles.state}>
          <Text style={styles.statAmount}>10</Text>
          <Text style={styles.stateTitle}># Employee</Text>
        </View>
      
        <View style={styles.state}>
          <Text style={styles.statAmount}>Chihuhahua</Text>
          <Text style={styles.stateTitle}>City</Text>
        </View>

        <View style={styles.state}>
          <Text style={styles.statAmount}>American Acces</Text>
          <Text style={styles.stateTitle}>Branch</Text>
        </View>
      </View>

      {/* Botón */}
      <View style={styles.buttonContainer}>
        <Button title="Log out" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinea los elementos en la parte superior
    alignItems: 'center',
    paddingTop: 40, // Espacio superior para evitar que los elementos toquen el borde superior
  },
  photoContainer: {
    alignItems: 'center',
    marginBottom: 40, // Espacio debajo de la foto
  },
  avatarContainer: {
    shadowColor: '#151734',
    shadowRadius: 30,
    shadowOpacity: 0.4,
  },
  avatar: {
    width: 136,
    height: 136,
    borderRadius: 68,
  },
  name:{
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40, // Espacio debajo de las estadísticas
    paddingHorizontal: 20, // Espacio horizontal para evitar que las estadísticas toquen los bordes laterales
  },
  state: {
    alignItems: 'center',
    flex: 1,
  },
  statAmount: {
    color: '#4f566D',
    fontSize: 18,
    fontWeight: '300',
  },
  stateTitle:{
    color: '#C3C5CD',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, // Dejar el botón en la misma posición
    alignSelf: 'center',
  }
});

export default Profile;
