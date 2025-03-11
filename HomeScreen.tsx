import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Navigation List</Text>
            <Button title="Email" onPress={() => navigation.navigate("Email")} />
            <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
            <Button title="User List" onPress={() => navigation.navigate("UserList")} />
        </View>
    );
};

export default HomeScreen;