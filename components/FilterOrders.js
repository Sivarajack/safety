import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Switch,
  Button,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Loading from "../commonComponents/Loading";
import CardText from "../commonComponents/CardView";

function FilterOrders() {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [apiloading, setapiLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [response, setresponse] = useState();
  const [searchtext, setsearchtext] = useState();
  const [searchQuery, setSearchQuery] = React.useState("");

  //const onChangeSearch = (query) => setSearchQuery(query);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        let response = await fetch(
          "https://data.mongodb-api.com/app/data-vsevf/endpoint/data/beta/action/find",
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "api-key":
                "NhXQe1LKtbeXGFwSB7jI1gN4N1w9NRbhWdQJsC7nCO7ZY77lGyd7Yb1pl7wilZkL",
            },
            body: JSON.stringify({
              dataSource: "Cluster0",
              database: "customer_details",
              collection: "data",
            }),
          }
        );
        let responseJson = await response.json();
        setDetails(responseJson.documents);
        setLoading(false);
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, [response]);

  const installed = async (data) => {
    setapiLoading(true);
    var d = new Date();
    console.log("d", d);
    console.log("data", data);
    let refillDate = d.setMonth(d.getMonth() + Number(data.nextRefill));
    var d1 = new Date(refillDate).toLocaleDateString();
    console.log(d1);
    console.log(data._id);
    //payload.refillDate = d1;
    //console.log(payload);
    try {
      let response = await fetch(
        "https://data.mongodb-api.com/app/data-vsevf/endpoint/data/beta/action/updateOne",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key":
              "NhXQe1LKtbeXGFwSB7jI1gN4N1w9NRbhWdQJsC7nCO7ZY77lGyd7Yb1pl7wilZkL",
          },
          body: JSON.stringify({
            dataSource: "Cluster0",
            database: "customer_details",
            collection: "data",
            filter: { _id: { $oid: data._id } },
            update: {
              $set: {
                status: "completed",
                refillDate: d1,
              },
            },
          }),
        }
      );
      let responseJson = await response.json();
      // setDetails(responseJson.documents);
      //setLoading(false);
      console.log(responseJson);
      setModalVisible(false);
      setIsEnabled(false);
      setapiLoading(false);
      setresponse(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (query) => {
    console.log("searchQuery", query);
    setSearchQuery(query);
  };

  const UpdateOrder = ({ data }) => {
    return (
      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 30,
              }}
            >
              Installation Status
            </Text>
            <Text>companyName:{data.companyName}</Text>
            <Text> ManagerName:{data.ManagerName}</Text>
            <View
              style={{
                flexDirection: "row",
                flex: 0.3,
                marginBottom: 20,
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 10,
                }}
              >
                Installation Completed
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            {apiloading && <ActivityIndicator size="large" color="#0000ff" />}
            <View
              style={{
                marginTop: 30,
                width: 250,
              }}
            >
              <Button
                title="Submit"
                onPress={() => {
                  installed(data);
                }}
              ></Button>
            </View>
            <View
              style={{
                margin: 30,
                width: 250,
              }}
            >
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setIsEnabled(false);
                }}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const cardView = (data) => {
    return (
      <TouchableOpacity
        onPress={(value) => {
          setModalVisible(true);
          setSelectedData(data);
        }}
      >
        {CardText(data)}
      </TouchableOpacity>
    );
  };

  const searchAPI = async () => {
    console.log("Im pressed$%$%$%%$");
    setLoading(true);
    try {
      let response = await fetch(
        "https://data.mongodb-api.com/app/data-vsevf/endpoint/data/beta/action/find",
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key":
              "NhXQe1LKtbeXGFwSB7jI1gN4N1w9NRbhWdQJsC7nCO7ZY77lGyd7Yb1pl7wilZkL",
          },
          body: JSON.stringify({
            dataSource: "Cluster0",
            database: "customer_details",
            collection: "data",
            filter: { ManagerName: searchQuery },
          }),
        }
      );
      let responseJson = await response.json();
      setDetails(responseJson.documents);
      setLoading(false);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={searchAPI}
        />

        {loading && <Loading />}
        {modalVisible && <UpdateOrder data={selectedData} />}
        {details &&
          details
            //.filter((a) => !(a.status === "completed"))
            .map((value) => cardView(value))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FilterOrders;
