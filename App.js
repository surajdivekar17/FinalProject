import React from "react";

//Stack Navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import LoginScreen from "./Screens/User/LoginScreen";
import Admin from "./Screens/Admin/Admin";
import HomeScreen from "./Screens/User/HomeScreen";
import UserHomepage from "./Screens/User/UserHomepage";
import AdminLogin from "./Screens/Admin/AdminLogin";
import AddMember from "./Screens/Admin/AddMember";
import AdminSignup from "./Screens/Admin/AdminSignup";
import SocietyMemberList from "./Screens/Admin/SocietyMemberList";
import CheckComplaints from "./Screens/Admin/CheckComplaints";
import Maintenance from "./Screens/Admin/Maintenance";
import BuySellRent from "./Screens/Admin/BuySellRent";
import Services from "./Screens/Admin/Services";
import AdminNotifications from "./Screens/Admin/AdminNotifications";


const Stack = createNativeStackNavigator();
  const globalScreenOptions={
    headerStyle: {backgroundColor : "#303134"},
    headerTitleStyle: { color: "white"},
    headerTintColor:"white",
};


const HelloWorldApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={globalScreenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="User" component={UserHomepage} />
        <Stack.Screen name="AdminLoggedIn" component={AdminLogin} />
        <Stack.Screen name="AdminSignedUp" component={AdminSignup} />
        <Stack.Screen name="AddMember" component={AddMember} />
        <Stack.Screen name="SocietyMemberList" component={SocietyMemberList} />
        <Stack.Screen name="CheckComplaints" component={CheckComplaints} />
        <Stack.Screen name="Maintenance" component={Maintenance} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="BuySellRent" component={BuySellRent} />
        <Stack.Screen name="AdminNotifications" component={AdminNotifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HelloWorldApp;
