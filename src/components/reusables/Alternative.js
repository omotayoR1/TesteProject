import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { COLORS } from '../../constants'

const Alternative = ({alternativeText, buttonText})=> {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> {alternativeText} </Text>
        <TextButton buttonText={buttonText} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
        color: COLORS.grey,
        fontSize: 14
    }
})

export default Alternative
