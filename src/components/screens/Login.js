import React from 'react'
import { Text, View, SafeAreaView, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import LoginHero from '../reusables/LoginHero'
import { COLORS, ROUTES } from '../../constants'
import { useForm } from "react-hook-form"
import UsernameInput from '../reusables/UsernameInput'
import PasswordInput from '../reusables/PasswordInput'
import Button from '../reusables/Button'
import Alternative from '../reusables/Alternative'


const {width, height} = Dimensions.get('screen')

const Login = ({navigation})=> {
    const {control, handleSubmit, formState:{errors}, watch} = useForm();
    const submit = (data)=>{
        navigation.navigate(ROUTES.WALLET)
    }
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/Loginbackground.png')} alt='background' style={styles.background}>
            <View style={styles.svgContainer}>
                <LoginHero />
            </View>
            <Text style={styles.header}>Login to your Account</Text>
            <UsernameInput 
            name={"username"}
            control={control}
            rules={{

            }}
            placeholder={'Username'}/>
            <PasswordInput 
            name={'password'}
            control={control}
            rules={{}}
            placeholder={"Password"}
            secureTextEntry={true}
            buttonText={"Forget"}/>
            <Button buttonPress={handleSubmit(submit)} buttonText={"Sign In"} buttonHeight={44} buttonWidth={"100%"} backgroundColor={COLORS.lightBlue} textColor={COLORS.white} textSize={14} />
            <View style={{position: 'absolute', bottom: 30, right: 0, width: width, paddingHorizontal: width/9, alignItems: 'center', zIndex: 0}}>
                <Alternative alternativeText={"Dont have an account?"} buttonText={"Sign up"} />
            </View>
        </ImageBackground>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        paddingHorizontal: width/9,
        paddingVertical: 30
    },
    svgContainer: {
        marginTop:30
    },
    header: {
        color: COLORS.grey,
        marginVertical: 16,
        fontSize: 16
    }
})

export default Login
