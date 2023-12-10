import React from 'react'
import { Text, View,TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'
import { COLORS } from '../../constants'
import Svg, {Path} from 'react-native-svg';
import TextButton from './TextButton';

const PasswordInput = ({name, rules={},control, secureTextEntry, placeholder, buttonText })=> {
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
                    <Path d="M15.75 12V9H9" stroke="#1293A9" stroke-linecap="square"/>
                    <Path d="M5.25 12C6.90685 12 8.25 10.6569 8.25 9C8.25 7.34315 6.90685 6 5.25 6C3.59315 6 2.25 7.34315 2.25 9C2.25 10.6569 3.59315 12 5.25 12Z" stroke="#1293A9" stroke-linecap="square"/>
                    <Path d="M12.75 11.25V9" stroke="#1293A9" stroke-linecap="square"/>
                </Svg>
                </View>
                <TextInput 
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                placeholderTextColor="#999"
                style={styles.input}/>
                <View style={{width: '20%'}}>
                    <TextButton buttonText={buttonText} />
                </View>
            </View>
            <Text style={styles.error}>{error?.message}</Text>
        </View>
      )}
      />
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flexDirection: 'column',
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
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000'
    },
    iconContainer: {
        width: '10%'
    },
    error: {
        marginTop: 8
    }
})

export default PasswordInput
