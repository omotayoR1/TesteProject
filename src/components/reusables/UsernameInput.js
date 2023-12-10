import React from 'react'
import { Text, View,TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import { COLORS } from '../../constants'
import Svg, {Path} from 'react-native-svg';

const UsernameInput = ({name, rules={}, control, placeholder})=> {
    return (
      <Controller
      name={name}
      rules={rules}
      control={control}
      render={({field: {onChange, value, onBlur}, fieldState:{error}})=>(
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                    <Svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M9.59386 11.795C9.96304 11.6612 10.2656 11.5375 10.5016 11.4238C10.9146 11.2249 11.313 10.9995 11.625 10.6875C12.1875 10.125 10.5 10.125 10.5 7.3125C10.5 5.43769 11.2498 4.5 12.75 4.5C14.2502 4.5 15 5.43769 15 7.3125C15 10.125 13.3125 10.125 13.875 10.6875C15 11.8125 17.25 11.8125 17.25 13.5M0.75 13.5C0.75 11.8125 3 11.8125 4.125 10.6875C4.6875 10.125 3 10.125 3 7.3125C3 5.43769 3.74981 4.5 5.25 4.5C6.75019 4.5 7.5 5.43769 7.5 7.3125C7.5 10.125 5.8125 10.125 6.375 10.6875C7.5 11.8125 9.75 11.8125 9.75 13.5H0.75Z" stroke="#1293A9" stroke-linecap="square"/>
                        <Path d="M9 12C9.27471 11.9073 9.47266 11.8389 9.59386 11.795" stroke="#1293A9" stroke-linecap="round"/>
                    </Svg>
                </View>
                <TextInput 
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                placeholderTextColor="#999"
                style={styles.input}/>
            </View>
            <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}/>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: 'column'
    },
    inputContainer: {
        width: '100%',
        height: 44, 
        backgroundColor: COLORS.white,
        paddingHorizontal: 8,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
    },
    iconContainer: {
        width: '10%'
    },
    error: {
        marginTop:8
    }
})

export default UsernameInput
