import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, TextInput,Alert } from "react-native";
import { BlurView } from "expo-blur";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./Navigation";  
import { usePushedNotifications } from "./usePushNotifications";



const uri = "https://i.pinimg.com/564x/1c/80/3e/1c803ed49857e073503c887fb29b5c9b.jpg";
const profilePicture = "https://i.pinimg.com/564x/41/22/84/4122849bf14714df79a3c154b51ee53e.jpg";

function HomeScreen() {
  return (
    <Navigation></Navigation>
  );
}


function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation(); // Usar el hook useNavigation para obtener la referencia de navegación
  // crear cuenta
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert("Error", errorMessage);
      });
    };
    // iniciar sesión
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('Login successful');
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("HomeScreen"); // Navegar a la pantalla HomeScreen
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };
  
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <BlurView intensity={20}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profile} />

            <View>
              <Text style={styles.labelText}>E-Mail</Text>
              <TextInput
                style={styles.input}
                placeholder="Akiddor7@gmail.com"
                onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View>
              <Text style={styles.labelText}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Arriba el Mazatlan"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                />
            </View>

            <TouchableOpacity onPress={handleLogin} style={[styles.button, { backgroundColor: "#2823bc" }]}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: "#808B96" }]}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

export default function App() {
const {expoPushToken} = usePushedNotifications()
console.log(expoPushToken);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "blue",
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "400",
    color: "white",
  },
  labelText: {
    fontSize: 17,
    fontWeight: "400",
    color: "white",
  },
});
