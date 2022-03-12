import React from "react";
import { Text, View } from "react-native";
import moment from "moment";

const CardText = (data, refil) => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        height: 150,
        padding: 10,
        margin: 10,
      }}
    >
      {console.log(data)}
      <>
        {refil && (
          <Text>
            refillDate :{moment(data.refillDate, "MM/DD/YY").format("DD/MM/YY")}
          </Text>
        )}
        <Text>orderType : {data.orderType}</Text>
        <Text>companyName: {data.companyName}</Text>
        <Text>ManagerName: {data.ManagerName}</Text>
        <Text>number :{data.number}</Text>
        <Text>customerType: {data.customerType}</Text>
        <Text>capacity: {data.capacity}</Text>
      </>
    </View>
  );
};

export default CardText;
