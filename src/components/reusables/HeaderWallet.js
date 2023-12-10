import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import { COLORS } from '../../constants'
import NotificationButton from './NotificationButton'

const {width, height} = Dimensions.get('screen')

const HeaderWallet = ()=> {
    return (
      <View style={styles.container}>
        <View style={styles.profileHolder}>
            <View style={styles.imageHolder}>
                <Image source={require('../../assets/imageholder.png')} resizeMode='cover' style={styles.image} />
            </View>
            <Text style={styles.text}>Ajalla Ugo</Text>
        </View>
        <NotificationButton />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, 
    profileHolder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageHolder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: COLORS.lightBlue
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 25,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.grey,
        marginLeft: 8
    }
})

export default HeaderWallet
