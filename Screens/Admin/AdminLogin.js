import { View, Text, Button,StyleSheet} from 'react-native'
import React from 'react';

const AdminLogin = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title} >Welcome Admin</Text>
      <Button title="Add a New Society Member" onPress={() => navigation.navigate("AddMember")} />
      <Button title="CheckComplaints" onPress={() => navigation.navigate("CheckComplaints")} />
      <Button title="BuySellRent" onPress={() => navigation.navigate("BuySellRent")} />
      <Button title="Maintenance" onPress={() => navigation.navigate("Maintenance")} />
      <Button title="Services" onPress={() => navigation.navigate("Services")} />
      <Button title="Click to View Society Member's List" onPress={() => navigation.navigate("SocietyMemberList")} />
      <Button title="Notifications" onPress={() => navigation.navigate("AdminNotifications")} />
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#303134",
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
    
  });

  
export default AdminLogin