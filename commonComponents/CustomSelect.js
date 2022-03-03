import React from "react";
import { Controller } from "react-hook-form";
import { View, Picker,StyleSheet } from "react-native";

function CustomSelect({ control, name, options,placeholder }) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <Picker
            selectedValue={0}
            //style={{ height: 50, width: 150 }}
            onValueChange={(value)=>{if(value) onChange(value)}}
          >
            <Picker.Item label={placeholder} value={0}/>
            {options.map((option) => (
              <Picker.Item label={option.toUpperCase()} value={option} key={option}/>
            ))}
          </Picker>
        )}
      />
    </View>
  );
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        alignSelf:"stretch",
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:"#ccbfbe",
        borderRadius:4
    }
    })
export default CustomSelect;
