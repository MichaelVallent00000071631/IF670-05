import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userList: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default styles;
