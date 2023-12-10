import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import { COLORS } from '../../constants'


const AmountInput = ({name, rules={}, control, placeholder, keyboardType, label, borderColor, backgroundColor})=> {
    return (
        <Controller
        name={name}
        rules={rules}
        control={control}
        render={({field: {onChange, value, onBlur}, fieldState:{error}})=>(
          <View style={styles.mainContainer}>
            <Text style={styles.error}>{label}</Text>
              <View style={{
                width: '100%',
                height: 44, 
                backgroundColor: backgroundColor,
                paddingHorizontal: 8,
                borderRadius: 7,
                borderWidth: 1,
                borderColor: borderColor,
                marginTop: 8
              }}>
                  <TextInput 
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  placeholderTextColor="#999"
                  keyboardType={keyboardType}
                  style={styles.input}/>
              </View>
          </View>
        )}/>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: 'column',
        marginTop: 8
    },
    inputContainer: {
        width: '100%',
        height: 44, 
        backgroundColor: COLORS.skyblue,
        paddingHorizontal: 8,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: COLORS.lightBlue,
        marginTop: 8
    },
    input: {
        width: '100%',
        textAlign: 'center',
        color: '#000'
    },
    error: {
        fontSize: 18,
        color: COLORS.bb
    }
})


export default AmountInput
