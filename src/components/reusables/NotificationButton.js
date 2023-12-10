import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Svg, {G,Path,Rect,Defs,ClipPath} from 'react-native-svg';
import { COLORS } from '../../constants';

const NotificationButton = ()=> {
    return (
      <TouchableOpacity style={styles.container}>
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1401_212)">
            <Path d="M18.3334 16.6666H1.66675V15H2.50008V9.19246C2.50008 5.03579 5.85841 1.66663 10.0001 1.66663C14.1417 1.66663 17.5001 5.03579 17.5001 9.19246V15H18.3334V16.6666ZM7.91675 17.5H12.0834C12.0834 18.0525 11.8639 18.5824 11.4732 18.9731C11.0825 19.3638 10.5526 19.5833 10.0001 19.5833C9.44755 19.5833 8.91764 19.3638 8.52694 18.9731C8.13624 18.5824 7.91675 18.0525 7.91675 17.5Z" fill="#1293A9"/>
            </G>
            <Defs>
            <ClipPath id="clip0_1401_212">
            <Rect width="20" height="20" fill="white"/>
            </ClipPath>
            </Defs>
        </Svg>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 12,
        backgroundColor: COLORS.skyblue,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NotificationButton
