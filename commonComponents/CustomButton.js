import React from 'react'
import { Controller } from 'react-hook-form'
import { Button, View } from 'react-native'

function CustomButton({title,submitFunction,handleSubmit}) {
    return (
        <View>
            <Button title={title} onPress={handleSubmit(submitFunction)}/>
        </View>
    )
}

export default CustomButton
