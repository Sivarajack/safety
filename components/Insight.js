import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import CardText from "../commonComponents/CardView";
import Loading from "../commonComponents/Loading";
import dateCheck from "../commonComponents/util";
import moment from "moment";
import RadioForm from "react-native-simple-radio-button";
import { Searchbar } from "react-native-paper";

const Insight = () => {
  const [details, setDetails] = useState();
  const [SelectedData, setSelectedData] = useState();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

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
        setSelectedData(responseJson.documents);
        setLoading(false);
        return responseJson;
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);

  const cardView = (data) => {
    return (
      <TouchableOpacity onPress={(value) => {}}>
        {CardText(data, true)}
      </TouchableOpacity>
    );
  };
  const onChange = (value) => {
    console.log(value);
    let start = moment();
    let end = moment().add(Number(value), "months");
    if (value === "All") {
      setSelectedData(details);
    } else if (typeof value === "number") {
      let filteredData = details.filter((a) =>
        dateCheck(start, end, a.refillDate)
      );
      // setSelectedData(filteredData);
    } else {
      let filteredData = details.filter((a) => a.ManagerName === searchQuery);
      setSelectedData(filteredData);
    }
    return;
  };
  const Filter = () => {
    return (
      <RadioForm
        labelStyle={{ marginRight: 20 }}
        formHorizontal={true}
        labelHorizontal={true}
        radio_props={[
          { label: "All   ", value: "All" },
          { label: "1  ", value: 1 },
          { label: "2  ", value: 2 },
          { label: "3  ", value: 3 },
          { label: "4  ", value: 4 },
        ]}
        initial={0}
        onPress={(value, index) => onChange(value)}
      />
    );
  };
  const onChangeSearch = (query) => {
    console.log("searchQuery", query);
    setSearchQuery(query);
  };
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {loading && <Loading />}
        <View style={styles.filter}>
          <Text style={{ padding: 10 }}>Filter by refill months</Text>
          <Filter />
          <Text style={{ padding: 10 }}>Filter by Manager Name</Text>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onIconPress={onChange}
          />
        </View>
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
  filter: {
    padding: 5,
    backgroundColor: "white",
  },
});
