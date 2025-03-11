import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Email from "./Email";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import UserList from "./UserList";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
