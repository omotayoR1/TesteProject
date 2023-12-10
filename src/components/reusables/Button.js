import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({buttonText, buttonWidth, buttonHeight, marginTop, backgroundColor, buttonPress, textColor, textSize})=> {
    return (
      <TouchableOpacity onPress={buttonPress} style={{width: buttonWidth, height: buttonHeight, alignItems: 'center', justifyContent: 'center', marginTop: marginTop, backgroundColor: backgroundColor, borderRadius: 7}}>
        <Text style={{color: textColor, fontSize: textSize}}>{buttonText}</Text>
      </TouchableOpacity>
    )
}

export default Button
