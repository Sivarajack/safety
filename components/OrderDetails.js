import React from "react";
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppContext";
import CustomButton from "./../commonComponents/CustomButton";
import CustomSelect from "./../commonComponents/CustomSelect";
import CustomRadio from "./../commonComponents/CustomRadio";
import CustomDatePicker from "./../commonComponents/CustomDatePicker";

import Input from "./../commonComponents/Input";
function OrderDetails() {
  const { control, handleSubmit,watch } = useContext(AppContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomRadio
          control={control}
          name="orderType"
          options={[
            { label: "Installation", value: "install" },
            { label: "Refill", value: "refill" },
          ]}
        />
        <CustomRadio
          control={control}
          name="orderType"
          options={[
            { label: "DCP", value: "dcp" },
            { label: "ABC", value: "abc" },
            { label: "CO2", value: "co2" },
            { label: "FOAM", value: "foam" },
          ]}
        />
        <Input
          control={control}
          placeholder="Capacity"
          name="capacity"
          number
          required
        />
        <CustomDatePicker name="date" mode="date" control={control} watch={watch}/>
        <CustomSelect
          required
          control={control}
          name="nextRefill"
          options={["6", "7", "8", "9", "10", "11", "12"]}
          placeholder="---Next Refill---"
        />
        <Input control={control} placeholder="remarks" name="remarks" />
        <Input
          control={control}
          placeholder="BillAmount"
          name="billAmount"
          number
          required
        />
        <Input
          control={control}
          placeholder="AmountRecieved"
          name="amountRecieved"
        />

        {/* <CustomSelect
        required
        control={control}
        name="customerType"
        options={["office", "school", "residence", "shop", "others"]}
        placeholder="---CustomerType---"
      />
      <Input
        required
        control={control}
        placeholder="Address(line1)"
        name="addressLineOne"
      />
      <Input
        control={control}
        placeholder="Address(line2) optional"
        name="addressLineTwo"
      />
      <Input required control={control} placeholder="city" name="city" />
      <Input required control={control} placeholder="Pin" name="pin" number /> */}

        <CustomButton
          handleSubmit={handleSubmit}
          title="Next"
          submitFunction={handleSubmit((data) => console.log(data))}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "space-between",
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

export default OrderDetails;
