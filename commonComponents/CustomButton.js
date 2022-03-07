import React from 'react'
import { Controller } from 'react-hook-form'
import { Button, View, StyleSheet } from 'react-native'

function CustomButton({title,submitFunction,handleSubmit}) {
    return (
        <View  style={styles.container} >
            <Button title={title}  onPress={handleSubmit(submitFunction)}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        width:200,
        
        //backgroundColor: "#ffff",
        paddingTop: 10
    }
    })

export default CustomButton
