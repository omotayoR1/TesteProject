import React from 'react'
import { View, StyleSheet } from 'react-native'
import Topup from './Topup'
import Withdraw from './Withdraw'

const Actions = ({text, backgroundColor, borderRadius, padding, handleNext})=> {
    return (
      <View style={styles.container}>
         <Topup text={text} backgroundColor={backgroundColor} borderRadius={borderRadius} padding={padding} />
         <Withdraw handleNext={handleNext} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Actions
