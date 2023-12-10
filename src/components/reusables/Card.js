import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { COLORS } from '../../constants'
import Svg, {G,Path,Rect,Defs,ClipPath} from 'react-native-svg';

const {width, height} = Dimensions.get('screen')

const Card = ()=> {
    return (
      <View style={styles.container}>
        <View style={styles.balanceContainer}>
           <View style={styles.amount}>
                <Text style={styles.amounttext}>120, 000 </Text>
                <Text style={styles.balance}>Balance </Text>
           </View>
           <View>
           <Svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_1401_180)">
                <Path d="M32.0833 8H21.875C19.5543 8 17.3287 8.84285 15.6878 10.3431C14.0468 11.8434 13.125 13.8783 13.125 16C13.125 18.1217 14.0468 20.1566 15.6878 21.6569C17.3287 23.1571 19.5543 24 21.875 24H32.0833V26.6667C32.0833 27.0203 31.9296 27.3594 31.6562 27.6095C31.3827 27.8595 31.0117 28 30.625 28H4.37496C3.98819 28 3.61725 27.8595 3.34376 27.6095C3.07027 27.3594 2.91663 27.0203 2.91663 26.6667V5.33333C2.91663 4.97971 3.07027 4.64057 3.34376 4.39052C3.61725 4.14048 3.98819 4 4.37496 4H30.625C31.0117 4 31.3827 4.14048 31.6562 4.39052C31.9296 4.64057 32.0833 4.97971 32.0833 5.33333V8ZM21.875 10.6667H33.5416V21.3333H21.875C20.3279 21.3333 18.8441 20.7714 17.7502 19.7712C16.6562 18.771 16.0416 17.4145 16.0416 16C16.0416 14.5855 16.6562 13.229 17.7502 12.2288C18.8441 11.2286 20.3279 10.6667 21.875 10.6667ZM21.875 14.6667V17.3333H26.25V14.6667H21.875Z" fill="white"/>
                </G>
                <Defs>
                <ClipPath id="clip0_1401_180">
                <Rect width="35" height="32" fill="white"/>
                </ClipPath>
                </Defs>
            </Svg>
           </View>
        </View>
        <View style={styles.information}>
           <View style={styles.amount}>
                <Text style={styles.balance}>Account Number </Text>
                <Text style={styles.amounttext1}>9102356712</Text>
           </View>
           <View style={styles.amount}>
                <Text style={styles.balance}>Bank</Text>
                <Text style={styles.amounttext1}>Access Bank</Text>
           </View>
        </View>
        <View style={styles.bigCircle} />
        <View style={styles.smallCircle} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height/4,
        borderRadius: 20,
        backgroundColor: COLORS.lightBlue,
        marginVertical: 20,
        position: 'relative',
        padding: 16
    },
    balanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    amount: {
        flexDirection: 'column'
    },
    amounttext: {
        fontSize: 32,
        color: COLORS.white
    },
    amounttext1: {
        fontSize: 18,
        color: COLORS.white
    },
    balance: {
        fontSize: 13,
        color: COLORS.white
    },
    information: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 16,
        left: 16
    },
    bigCircle: {
        width: '50%',
        height: height/5.6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 130,
        borderBottomLeftRadius: 140,
        borderBottomRightRadius: 150,
        backgroundColor: COLORS.maskColor,
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0
    },
    smallCircle: {
        width: '30%',
        height: height/12,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 20,
        backgroundColor: COLORS.maskColor,
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        right: 0
    }
})

export default Card
