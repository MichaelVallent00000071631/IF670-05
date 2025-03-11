import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const contacts = [
  { id: "1", name: "John Smith", image: "https://randomuser.me/api/portraits/lego/0.jpg" },
  { id: "2", name: "Jane Doe", image: "https://randomuser.me/api/portraits/lego/1.jpg" },
  { id: "3", name: "Michael Johnson", image: "https://randomuser.me/api/portraits/lego/2.jpg" },
  { id: "4", name: "Emily Williams", image: "https://randomuser.me/api/portraits/lego/3.jpg" },
  { id: "5", name: "William Brown", image: "https://randomuser.me/api/portraits/lego/4.jpg" },
  { id: "6", name: "Olivia Jones", image: "https://randomuser.me/api/portraits/lego/5.jpg" },
  { id: "7", name: "James Miller", image: "https://randomuser.me/api/portraits/lego/6.jpg" },
  { id: "8", name: "Sophia Davis", image: "https://randomuser.me/api/portraits/lego/7.jpg" },
  { id: "9", name: "Ethan Garcia", image: "https://randomuser.me/api/portraits/lego/8.jpg" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#808080",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 100,
    // shadowColor: "#000",
    // shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#000000",
  },
});
