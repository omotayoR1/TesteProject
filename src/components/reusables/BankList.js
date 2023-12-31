import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'
import Svg, {Circle,G,Path,Rect,Defs,ClipPath} from 'react-native-svg';

const BankList = ({name, bank, account, isSelected, selected, id, handlePress})=> {
    return (
      <TouchableOpacity onPress={()=>handlePress(id)} style={{backgroundColor: selected===id ? COLORS.skyblue : COLORS.lightGrey, marginVertical: 8, paddingVertical: 19, paddingHorizontal:13, borderRadius: 7, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'}}>
        <View style={styles.container}>
            {
                selected === id 
                ?
                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G clip-path="url(#clip0_1401_246)">
                    <Path d="M7.5 0.9375C6.20206 0.9375 4.93327 1.32238 3.85407 2.04348C2.77488 2.76458 1.93374 3.7895 1.43704 4.98864C0.940343 6.18778 0.810384 7.50728 1.0636 8.78028C1.31682 10.0533 1.94183 11.2226 2.85961 12.1404C3.7774 13.0582 4.94672 13.6832 6.21972 13.9364C7.49272 14.1896 8.81222 14.0597 10.0114 13.563C11.2105 13.0663 12.2354 12.2251 12.9565 11.1459C13.6776 10.0667 14.0625 8.79794 14.0625 7.5C14.0625 5.75952 13.3711 4.09032 12.1404 2.85961C10.9097 1.6289 9.24049 0.9375 7.5 0.9375ZM7.5 13.125C6.38748 13.125 5.29995 12.7951 4.37492 12.177C3.44989 11.5589 2.72892 10.6804 2.30318 9.65259C1.87744 8.62476 1.76604 7.49376 1.98309 6.40262C2.20013 5.31147 2.73586 4.30919 3.52253 3.52252C4.3092 2.73585 5.31148 2.20012 6.40262 1.98308C7.49376 1.76604 8.62476 1.87743 9.6526 2.30318C10.6804 2.72892 11.5589 3.44989 12.177 4.37492C12.7951 5.29994 13.125 6.38748 13.125 7.5C13.125 8.99184 12.5324 10.4226 11.4775 11.4775C10.4226 12.5324 8.99185 13.125 7.5 13.125Z" fill="#1293A9"/>
                    <Path d="M7.5 4.6875C6.94374 4.6875 6.39997 4.85245 5.93746 5.16149C5.47495 5.47053 5.11446 5.90979 4.90159 6.4237C4.68872 6.93762 4.63302 7.50312 4.74154 8.04869C4.85006 8.59426 5.11793 9.0954 5.51126 9.48874C5.9046 9.88207 6.40574 10.1499 6.95131 10.2585C7.49688 10.367 8.06238 10.3113 8.5763 10.0984C9.09022 9.88554 9.52947 9.52505 9.83851 9.06254C10.1476 8.60003 10.3125 8.05626 10.3125 7.5C10.3125 6.75408 10.0162 6.03871 9.48874 5.51126C8.96129 4.98382 8.24592 4.6875 7.5 4.6875Z" fill="#1293A9"/>
                    </G>
                    <Defs>
                    <ClipPath id="clip0_1401_246">
                    <Rect width="15" height="15" fill="white"/>
                    </ClipPath>
                    </Defs>
                </Svg>
                :
                <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="6" cy="6" r="5.5" stroke="#767E80"/>
                </Svg>
            }
            <View style={styles.nameHolder}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.number}>{account}</Text>
            </View>
        </View>
        <View style={styles.accountContainer}>
            <Text style={styles.bank}>Bank</Text>
            <Text style={styles.account}>{bank}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    accountContainer:{
        flexDirection: 'column'
    },
    bank: {
        fontWeight: '500',
        fontSize: 12,
        color: COLORS.sss
    },
    account: {
        color: COLORS.bb
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameHolder: {
        flexDirection: 'column',
        marginLeft: 9
    },
    name: {
        fontSize: 18,
        color: COLORS.ano,
        fontWeight: 'bold'
    },
    number: {
        color: COLORS.sss,
        marginTop: 8
    }
})

export default BankList
