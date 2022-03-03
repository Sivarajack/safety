import React from "react";
import { Controller } from "react-hook-form";
import { TextInput, View, StyleSheet } from "react-native";
import RadioForm from "react-native-simple-radio-button";
function CustomRadio({ name, control,options }) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <RadioForm 
          labelStyle={{marginRight:20}}
            formHorizontal={true}
            labelHorizontal={true}
            radio_props={options}
            initial={0}
            onPress={onChange}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignSelf: "stretch",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccbfbe",
    borderRadius: 4,
  },
});

export default CustomRadio;
