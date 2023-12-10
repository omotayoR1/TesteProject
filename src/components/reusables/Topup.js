import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Svg, {Path} from 'react-native-svg';
import { COLORS } from '../../constants';

const Topup = ({text, backgroundColor, borderRadius,padding, handlePressed})=> {
    return (
      <TouchableOpacity onPress={handlePressed} style={{backgroundColor: backgroundColor, borderRadius: borderRadius, padding: padding, alignItems: 'center',flexDirection: 'row',justifyContent: 'center'}}>
        <View>
            <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M9.5 2.375C13.4187 2.375 16.625 5.58125 16.625 9.5C16.625 13.4187 13.4187 16.625 9.5 16.625C5.58125 16.625 2.375 13.4187 2.375 9.5C2.375 5.58125 5.58125 2.375 9.5 2.375ZM9.5 1.1875C4.92813 1.1875 1.1875 4.92813 1.1875 9.5C1.1875 14.0719 4.92813 17.8125 9.5 17.8125C14.0719 17.8125 17.8125 14.0719 17.8125 9.5C17.8125 4.92813 14.0719 1.1875 9.5 1.1875Z" fill="#1293A9"/>
                <Path d="M14.25 8.90625H10.0938V4.75H8.90625V8.90625H4.75V10.0938H8.90625V14.25H10.0938V10.0938H14.25V8.90625Z" fill="#1293A9"/>
            </Svg>
        </View>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.grey,
        marginLeft: 5
    }
})

export default Topup
