import { useForm } from "react-hook-form";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientDetails from "./components/ClientDetails";
import { AppContext } from "./context/AppContext";
import OrderDetails from "./components/OrderDetails";
import Home from "./components/Home";
import FilterOrders from "./components/FilterOrders";

const Stack = createNativeStackNavigator();
export default function App() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { orderType: "install", date: new Date() },
  });
  //console.log(errors);
  return (
    <>
      <View style={styles.header}>
        <Text style={[{ color: "#ffff", fontSize: 28, fontWeight: "bold" }]}>
          Safety & Safety
        </Text>
      </View>

      <AppContext.Provider value={{ control, handleSubmit, watch }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Dashboard" }}
            />
            <Stack.Screen
              name="Client"
              component={ClientDetails}
              options={{ title: "ClientDetails" }}
            />
            <Stack.Screen
              name="View"
              component={FilterOrders}
              options={{ title: "FilterOrders" }}
            />
            <Stack.Screen
              name="Order"
              component={OrderDetails}
              options={{ title: "OrderDetails" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    marginTop: 35,
    padding: 10,
    display: "flex",

    width: "100%",
    backgroundColor: "#293964",
  },
  subHeader: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    display: "flex",
    alignSelf: "stretch",
    alignItems: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
