import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./commonComponents/CustomButton";
import CustomSelect from "./commonComponents/CustomSelect";
import Input from "./commonComponents/Input";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientDetails from "./components/ClientDetails";
import { AppContext } from "./context/AppContext";
import OrderDetails from "./components/OrderDetails";

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
  console.log(errors);
  return (
    
      <>
        <View style={styles.header}>
          <Text style={[{ color: "#ffff", fontSize: 26 }]}>
            Safety & Safety
          </Text>
        </View>
        <AppContext.Provider value={{control,handleSubmit,watch}}>
        <NavigationContainer>
        <Stack.Navigator>
          
        <Stack.Screen
          name="Home"
          component={ClientDetails}
          options={{ title: 'ClientDetails' }}
        />
        <Stack.Screen
          name="Order"
          component={OrderDetails}
          options={{ title: 'OrderDetails' }}
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
    marginTop: 30,
    padding: 10,
    display: "flex",
    alignItems: "center",

    width: "100%",
    backgroundColor: "red",
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
