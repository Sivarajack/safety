import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Loading from "../commonComponents/Loading";

function FilterOrders() {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
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

  const cardView = (data) => {
    return (
      <>
        <View
          style={{
            backgroundColor: "#FFFFFF",

            borderRadius: 20,
            height: 270,
            padding: 10,
          }}
        >
          <Text>orderType : {data.orderType}</Text>
          <Text>companyName: {data.companyName}</Text>
          <Text>ManagerName: {data.ManagerName}</Text>
          <Text>number :{data.number}</Text>
          <Text>customerType: {data.customerType}</Text>
          <Text>addressLineOne: {data.addressLineOne}</Text>
          <Text>city: {data.city}</Text>
          <Text>pin: {data.pin}</Text>
          <Text>capacity: {data.capacity}</Text>
          <Text>nextRefill: {data.nextRefill}</Text>
          <Text>billAmount: {data.billAmount}</Text>
          <Text>amountRecieved: {data.amountRecieved}</Text>
        </View>
      </>
    );
  };

  return (
    <>
      <View style={{ padding: 10 }}>
        {loading && <Loading />}
        {details &&
          /* <FlatList
            data={details}
            renderItem={cardView}
            keyExtractor={(item) => item.id}
          /> */
          details.map((value) => cardView(value))}
      </View>
    </>
  );
}

export default FilterOrders;
