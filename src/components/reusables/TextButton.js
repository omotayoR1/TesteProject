import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'

const TextButton = ({buttonText})=> {
    return (
      <TouchableOpacity>
        <Text style={{color: COLORS.lightBlue, fontWeight: 'bold'}}>{buttonText}</Text>
      </TouchableOpacity>
    )
}

export default TextButton
