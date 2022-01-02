import 'react-native-gesture-handler';
import * as React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>
         <Tab.Screen name="Home" component={HomeScreen} 
         //options={{ tabBarIcon: ({ size, color }) => 
        // ( <AntDesign name="home" size={size} color={color} /> ), 
        // }}
         />
         
         <Tab.Screen name="Reminder" component={AddScreen} 
         //options={{ tabBarIcon: ({ size, color }) => 
        // ( <AntDesign name="clockcircleo" size={size} color={color} /> ), 
        // }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;