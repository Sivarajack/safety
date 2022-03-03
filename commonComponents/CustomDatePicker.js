import React, { useState } from "react";
import { View, Pressable,StyleSheet,Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
function CustomDatePicker({ control, name, mode ,watch}) {
  const [showDate, setShowDate] = useState(false);
  const date=watch(name)
  
  return (
    <View style={{width:"100%"}}>
      <Pressable 
        onPress={() => {
          setShowDate(true);
        }}
      >

        <View style={styles.container}><Text>{date?dayjs(date).format("DD/MM/YYYY"):""}</Text><FontAwesome size={30} color="blue" name="calendar"/></View>
        
      </Pressable>
      {showDate && (
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange } }) => (
            <DateTimePicker
              testID="dateTimePicker"
              value={value}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={(event, value) => {
                onChange(value);
                setShowDate(false);
              }}
            />
          )}
        />
      )}
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
      backgroundColor:"#fff",
      alignSelf:"stretch",
      padding:10,
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      borderWidth:1,
      borderColor:"#ccbfbe",
      borderRadius:4
  }
  })
export default CustomDatePicker;
