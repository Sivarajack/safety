import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.centeredView}>
      <Text style={[{ color: "#1f2937", fontSize: 25, padding: 20 }]}>
        Hello,{" "}
        <Text style={[{ color: "#10172a", fontWeight: "bold" }]}> Karthik</Text>
      </Text>

      <View style={styles.flexcontainer}>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("Client")}
        >
          <Image
            source={require("../assets/add.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={styles.cardtext}>Add User Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("View")}
        >
          <Image
            source={require("../assets/view.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={styles.cardtext}>View User Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("Insights")}
        >
          <Image
            source={require("../assets/view.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text style={styles.cardtext}>Re-Fill Insight</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondaryview}>
        <TouchableOpacity style={styles.secondarycard}>
          <Text style={styles.textcontainer}>This Week</Text>
          <Text style={styles.text}>Planned Refil: 20</Text>
          <Text style={styles.text}>PendingRefil: 10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondarycard}>
          <Text style={styles.textcontainer}>This Month</Text>
          <Text style={styles.text}>Planned Refil: 20</Text>
          <Text style={styles.text}>PendingRefil: 10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "#F5F5F8",
  },
  flexcontainer: {
    flexDirection: "row",
    height: 250,
    padding: 20,
    backgroundColor: "#F5F5F8",
  },
  cards: {
    backgroundColor: "#FFFFFF",
    flex: 0.8,
    margin: 8,
    borderRadius: 10,
    height: 200,
    padding: 10,
  },
  cardtext: { color: "#293964", fontSize: 22, fontWeight: "bold", padding: 8 },
  secondarycard: {
    backgroundColor: "#FFFFFF",
    margin: 8,
    borderRadius: 20,
    height: 200,
    padding: 10,
  },
  secondaryview: { backgroundColor: "#F5F5F8", height: "100%", padding: 10 },
  textcontainer: {
    color: "#293964",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  text: { color: "#293964", fontSize: 23 },
});
