import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class AdminSignup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>Enter Admin Details</Text>

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#303134"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#303134"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Mobile Number"
          placeholderTextColor="#303134"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <Text style={styles.baseText}>Enter Society Details</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Scociety Name"
          placeholderTextColor="#303134"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Society Adress"
          placeholderTextColor="#303134"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Registration number"
          placeholderTextColor="#303134"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> SignUp </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: "column", // set elements horizontally`.
    justifyContent: "flex-start",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#000",
    borderWidth: 1.5,
    paddingLeft: 8,
  },
  submitButton: {
    backgroundColor: "#303134",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
  baseText: {
    textAlign: "center",
    backgroundColor: "#303134",
    fontWeight: "bold",
    height: 30,
    color: "white",
  },
});

export default AdminSignup;
