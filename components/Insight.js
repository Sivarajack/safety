import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import CustomSelect from "./../commonComponents/CustomSelect";
import CardText from "../commonComponents/CardView";
import { AppContext } from "../context/AppContext";
import Loading from "../commonComponents/Loading";
import CustomButton from "../commonComponents/CustomButton";
import dateCheck from "../commonComponents/util";
import moment from "moment";

const Insight = () => {
  const [showModal, setshowModal] = useState(false);
  const [details, setDetails] = useState();
  const [SelectedData, setSelectedData] = useState();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, watch } = useContext(AppContext);

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
  }, []);

  const ModalFilter = () => {
    return (
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginBottom: 30,
              }}
            >
              Select the Month
            </Text>
            <CustomSelect
              required
              control={control}
              name="nextRefill"
              options={["1", "2", "3", "4", "5", "6"]}
              placeholder="---Next Refill---"
            />
            {/*  <CustomSelect
              required
              control={control}
              name="customerType"
              options={["office", "school", "residence", "shop", "others"]}
              placeholder="---CustomerType---"
            />
           
            <CustomSelect
              required
              control={control}
              name="status"
              options={["Installation Completed", "Installation Pending"]}
              placeholder="---Installation Status---"
            />
            <CustomSelect
              control={control}
              name="orderType"
              options={["dcp", "abc", "co2", "foam"]}
              placeholder="---Order Type---"
            /> */}
            <CustomButton
              handleSubmit={handleSubmit}
              title="Submit"
              submitFunction={handleSubmit((payload) => apiconnect(payload))}
            />
          </View>
        </View>
      </Modal>
    );
  };

  const cardView = (data) => {
    return (
      <TouchableOpacity onPress={(value) => {}}>
        {CardText(data, true)}
      </TouchableOpacity>
    );
  };

  const apiconnect = (payload) => {
    setshowModal(false);
    const start = moment();
    const end = moment().add(Number(payload.nextRefill), "months");
    let filteredData = details.filter((a) =>
      dateCheck(start, end, a.refillDate)
    );
    setSelectedData(filteredData);
  };

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {loading && <Loading />}
        <Pressable
          onPress={() => {
            setshowModal(true);
          }}
        >
          <Text>Filter Orders</Text>
        </Pressable>
        <ModalFilter />

        {SelectedData && SelectedData.map((value) => cardView(value))}
      </View>
    </ScrollView>
  );
};

export default Insight;

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
    width: 320,
  },
});
