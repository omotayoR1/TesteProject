import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const AmountPanel = ({amount})=> {
    return (
      <View style={styles.container}>
        <Text style={styles.smallText}>Your Balance</Text>
        <Text style={styles.bigText}>{amount}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30
    },
    smallText: {
        fontSize: 18,
        fontWeight: '500',
        color: COLORS.fool
    },
    bigText: {
        fontSize: 32,
        fontWeight: '400',
        color: COLORS.tt
    }
})

export default AmountPanel
