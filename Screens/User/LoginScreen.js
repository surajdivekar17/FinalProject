import { View, Text, Button, TextInput, StyleSheet, } from "react-native";
import React from "react";



function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
   
      <Text>Welcome Society Member !</Text>

      <TextInput style={styles.input} placeholder="Enter Your Username" />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        keyboardType="String"
      />

      <Button title="Log In" onPress={() => navigation.navigate("User")} />

    </View>
  ); 
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
 
});

export default LoginScreen;
