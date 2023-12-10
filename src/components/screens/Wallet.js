import React, {useRef, useMemo, useState} from 'react'
import { SafeAreaView, Text, View, StyleSheet} from 'react-native'
import { COLORS, ROUTES } from '../../constants'
import HeaderWallet from '../reusables/HeaderWallet'
import Card from '../reusables/Card'
import Actions from '../reusables/Actions'
import BottomSheet, { BottomSheetView, BottomSheetScrollView,BottomSheetFlatList } from "@gorhom/bottom-sheet";
import TextButton from '../reusables/TextButton'
import ListItems from '../reusables/ListItems'

const Wallet = ({navigation})=> {
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => [ '45%', '90%'], []);
    const [data, setData] = useState([
        {id:"1", title: 'Account Top Up', date: '24 Oct. 2020 8:45pm', amount: 50000, type: 'credit'},
        {id:"2", title: 'Rent Payment', date: '24 Oct. 2020 8:45pm', amount: 50000, type: 'debit'},
        {id:"3", title: 'Rent Payment', date: '24 Oct. 2020 8:45pm', amount: 50000, type: 'credit'},
        {id:"4", title: 'Rent Payment', date: '24 Oct. 2020 8:45pm', amount: 50000, type: 'debit'}
    ])
    const handleNext = ()=>{
        navigation.navigate(ROUTES.WITHDRAW)
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.parentContainer}>
                <HeaderWallet />
                <Card />
                <Actions text={"Top up Wallet"} padding={12} borderRadius={7} backgroundColor={COLORS.skyblue} handleNext={handleNext} />
            </View>
            <BottomSheet
            ref={bottomSheetRef}
            index={0}
            backgroundStyle={{backgroundColor: COLORS.lightGrey, borderTopLeftRadius: 26, borderTopRightRadius: 26 }}
            snapPoints={snapPoints}>
                <BottomSheetScrollView style={styles.bottomSheet}>
                    <BottomSheetView style={styles.headerItem}>
                        <Text style={styles.headertext}>Last Transactions</Text>
                        <TextButton buttonText={"See all"} />
                    </BottomSheetView>
                    <BottomSheetView style={styles.listContainer}>
                        <BottomSheetFlatList 
                        data={data}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item})=>(
                            <ListItems title={item.title} date={item.date} amount={item.amount} type={item.type} />
                        )}/>
                    </BottomSheetView>
                </BottomSheetScrollView>
            </BottomSheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    parentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLORS.white
    },
    bottomSheet:{
        width: '100%',
        height: '100%',
        padding: 20,
    },
    headerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headertext: {
        color: COLORS.grey,
        fontWeight: '500'
    },
    listContainer: {width: '100%',marginTop: 18}
})

export default Wallet
