import React from 'react'
import { View, StyleSheet, SafeAreaView, ImageBackground, Image, Dimensions } from 'react-native'
import Svg, {Path} from 'react-native-svg';
import { COLORS } from '../../constants';
import Hero from '../reusables/Hero';

const {width, height} = Dimensions.get('screen')

const SplashScreen = ()=> {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/homebackgroundimage.png')} alt='background' style={styles.background}>
            <View style={styles.imageHolder}>
                <Hero />
                <Image source={require('../../assets/digithouse.png')} alt='logo' style={styles.logo} />
            </View>
            <View style={styles.bigcircle}>
                <Svg width="65" height="110" viewBox="0 0 65 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M32.0096 109.015C49.688 109.015 64.0192 84.6111 64.0192 54.5074C64.0192 24.4038 49.688 0 32.0096 0C14.3312 0 0 24.4038 0 54.5074C0 84.6111 14.3312 109.015 32.0096 109.015Z" fill={COLORS.lightgreen}/>
                    <Path d="M55.8202 18.1008C58.806 29.994 59.2111 43.3075 56.963 55.6623C54.7149 68.0172 49.9602 78.6083 43.5486 85.5431C37.1369 92.4779 29.486 95.3044 21.9631 93.5177C14.4403 91.731 7.53557 85.4474 2.48291 75.7898C4.30684 83.056 7.03666 89.5601 10.4833 94.8514C13.9299 100.143 18.0109 104.095 22.4435 106.434C26.8761 108.773 31.5544 109.443 36.1541 108.397C40.7539 107.352 45.1652 104.616 49.0824 100.379C52.9996 96.1423 56.329 90.506 58.84 83.8605C61.351 77.2151 62.9835 69.7195 63.6244 61.8931C64.2653 54.0667 63.8993 46.0965 62.5517 38.5348C61.2042 30.9731 58.9073 24.0008 55.8202 18.1008V18.1008Z" fill={COLORS.darkgreen}/>
                </Svg>
            </View>
            <View style={styles.smallcircle}>
                <Svg width="43" height="72" viewBox="0 0 43 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M21.2355 71.9958C32.8609 71.9958 42.2851 55.9478 42.2851 36.1516C42.2851 16.3554 32.8609 0.307373 21.2355 0.307373C9.6102 0.307373 0.186035 16.3554 0.186035 36.1516C0.186035 55.9478 9.6102 71.9958 21.2355 71.9958Z" fill={COLORS.lightgreen}/>
                </Svg>
            </View>
        </ImageBackground>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageHolder:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image1: {
        width: width/1.2,
        height: height/2.3
    },
    logo: {
        marginTop: 10,
        width: width/1.7,
        height: height/14.4
    },
    bigcircle: {
        position: 'absolute',
        bottom: 24,
        right: 2
    },
    smallcircle: {
        position: 'absolute',
        bottom: 0,
        right: 72
    }
})
export default SplashScreen
