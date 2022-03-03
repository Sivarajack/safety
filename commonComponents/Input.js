import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, View ,StyleSheet} from "react-native";
function Input({ name, control, placeholder, secureTextEntry,required,number }) {
  console.log(number)
  return (
    <View style={[styles.container]}>
      <Controller
        control={control}
        name={name}
        rules={
          {required:required}
        }
        render={({ field: { value, onChange, onBlur },fieldState:{error} }) => (
            <TextInput
            keyboardType={number?"number-pad":"default"}
            value={value}
            onChangeText={onChange}
            placeholderTextColor={error?"red":""}
            onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
            
        )}
      />
    </View>
  );
}
const styles= StyleSheet.create({
container:{
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

export default Input;
