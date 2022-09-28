import { View, Text, Button, StyleSheet,TextInput } from "react-native";
import React from "react";

const Admin = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Admin</Text>
      <TextInput style={styles.input} placeholder="Enter Your Username" />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        keyboardType="String"
      />

      <Button
        title="Log In"
        onPress={() => navigation.navigate("AdminLoggedIn")}
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate("AdminSignedUp")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Admin;
//mc
