import React from 'react'
import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppContext } from '../context/AppContext';
import CustomButton from "./../commonComponents/CustomButton";
import CustomSelect from "./../commonComponents/CustomSelect";

import Input from "./../commonComponents/Input";
function ClientDetails({navigation}) {
    const {control,handleSubmit,watch}=useContext(AppContext)
    return (
        <ScrollView>
        <View style={styles.container}>
        {/* <View style={styles.subHeader}>
          <Text style={{ fontSize: 18 }}>Client Details</Text>
        </View> */}
        <Input
          control={control}
          placeholder="CompanyName"
          name="companyName"
          required
        />
        <Input
          control={control}
          placeholder="ManagerName"
          name="ManagerName"
          required
        />
        <Input
          control={control}
          placeholder="DOB(optional)"
          name="dateOfBirth"
        />
        <Input
          control={control}
          placeholder="MobileNumber"
          name="number"
          number
          required
        />
        <Input control={control} placeholder="email(optional)" name="email" />
        <CustomSelect
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
        <Input required control={control} placeholder="Pin" name="pin" number />
        {/* <CustomRadio control={control} name="orderType" options={[
    { label: "Installation", value: "install" },
    { label: "Refill", value: "refill" },
  ]}/> */}

        {/* <CustomDatePicker
          name="date"
          mode="date"
          control={control}
        /> */}

        <CustomButton
          handleSubmit={handleSubmit}
          title="Next"
          submitFunction={handleSubmit((data) => navigation.push('Order'))}
        />

      </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      alignItems:"center",
      backgroundColor: "#f0f0f0",
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
  

export default ClientDetails
