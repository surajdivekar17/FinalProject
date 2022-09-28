import { View, Text, StyleSheet, Button} from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Nxt-Gen Society</Text>
      <Button title="Admin " onPress={() => navigation.navigate("Admin")} />
      <Button title="User" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
