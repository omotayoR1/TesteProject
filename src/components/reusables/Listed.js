import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

const Listed = ({title, answer})=> {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.answer}> {answer} </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
        marginVertical: 8,
        width: '100%',
        padding: 8
    },
    title: {
        color: COLORS.ano,
        fontSize: 14,
        fontWeight: '500'
    },
    answer: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.patchGrey
    }
})

export default Listed
