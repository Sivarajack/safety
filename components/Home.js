import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { PieChart } from "react-native-chart-kit";

function Home({ navigation }) {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: "#F5F5F8",
      }}
    >
      <Text style={[{ color: "#1f2937", fontSize: 25, padding: 20 }]}>
        Hello,{" "}
        <Text style={[{ color: "#10172a", fontWeight: "bold" }]}> Karthik</Text>
      </Text>

      <View
        style={{
          flexDirection: "row",
          height: 250,
          padding: 20,
          backgroundColor: "#F5F5F8",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.8,
            margin: 8,
            borderRadius: 20,
            height: 200,
            padding: 10,
          }}
          onPress={() => navigation.navigate("Client")}
        >
          <Image
            source={require("../assets/add.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text
            style={{
              color: "#293964",
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Add Customer Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            flex: 0.8,
            margin: 8,
            borderRadius: 20,
            height: 200,
            padding: 10,
          }}
          onPress={() => navigation.navigate("View")}
        >
          <Image
            source={require("../assets/view.png")}
            style={{ width: 60, height: 60 }}
          />
          <Text
            style={{
              color: "#293964",
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            View Customer Details
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: "#F5F5F8",
          height: "100%",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            margin: 8,
            borderRadius: 20,
            height: 200,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#293964",
              fontSize: 25,
              fontWeight: "bold",

              padding: 10,
            }}
          >
            This Week
          </Text>
          <Text
            style={{
              color: "#293964",
              fontSize: 23,
            }}
          >
            Planned Refil: 20
          </Text>
          <Text
            style={{
              color: "#293964",
              fontSize: 23,
            }}
          >
            PendingRefil: 10
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            margin: 8,
            borderRadius: 20,
            height: 200,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#293964",
              fontSize: 25,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            This Month
          </Text>
          <Text
            style={{
              color: "#293964",
              fontSize: 23,
            }}
          >
            Planned Refil: 20
          </Text>
          <Text
            style={{
              color: "#293964",
              fontSize: 23,
            }}
          >
            PendingRefil: 10
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
