import React, {useState, useRef, useMemo, useCallback} from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native'
import { COLORS } from '../../constants'
import HeaderWallet from '../reusables/HeaderWallet'
import AmountPanel from '../reusables/AmountPanel'
import { useForm } from "react-hook-form"
import AmountInput from '../reusables/AmountInput'
import Topup from '../reusables/Topup'
import Button from '../reusables/Button'
import BankList from '../reusables/BankList'
import {BottomSheetModal,BottomSheetModalProvider, BottomSheetView, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell} from 'react-native-confirmation-code-field';
import Listed from '../reusables/Listed'
import Select from '../reusables/Select'
import DropDownPicker from 'react-native-dropdown-picker';

const {width, height} = Dimensions.get('screen')
const CELL_COUNT = 4;

const WithdrawScreen = ()=> {
    const bottomSheetModalRef = useRef(null);
    const bottomSheetModalRef2 = useRef(null);
    const bottomSheetModalRef3 = useRef(null);
    const [items, setItems] = useState([{label: 'item 7', value: 'item 7'}])
    const [open, setOpen] = useState(false)
    const [valu, setValu] = useState()
    const [data, setData] = useState([
        {id: 1, name: "Ajalla Ugo", number: 9102356712, bank: "Access Bank", isSelected: false},
        {id: 2, name: "Ajalla Ugo", number: 9102356712, bank: "Access Bank", isSelected: false}
    ])
    const [ selected,setSelected] = useState(null)
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue,});
    const snapPoints = useMemo(() => ['50%', '50%', '80%'], []);

    const handlePress = (id) => {
        setSelected(id)
    }
    const handleOpen= useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleNext = ()=>{
        bottomSheetModalRef.current.dismiss()
        bottomSheetModalRef3.current?.present();
    }

    const handlePressed = ()=>{
        bottomSheetModalRef2.current?.present();
    }

    const renderBackdrop = (props) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="collapse"
          style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)'}}
        />
      );

    const {control, handleSubmit, formState:{errors}, watch} = useForm();
    return (
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.mainContainer}>
           <HeaderWallet />
           <AmountPanel amount={'120,000'} />
           <Text style={styles.withdraw}>Withdraw</Text>
           <AmountInput 
           control={control}
           name={'amount'} 
           rules={{}}
           keyboardType={'numeric'}
           placeholder={'Enter amount'}
           label={"Amount"}
           borderColor={COLORS.lightBlue}
           backgroundColor={COLORS.skyblue}
           />
           <View style={styles.try}>
            <Text style={styles.bold}>Select Bank</Text>
            <Topup handlePressed={handlePressed} text={"Add New Bank"} />
           </View>
           <View style={styles.listContainer}>
            <FlatList 
            data={data}
            keyExtractor={item=>item.id.toString()}
            renderItem={({item})=>(
                <BankList name={item.name} isSelected={item.isSelected} selected={selected} id={item.id} account={item.number} bank={item.bank} handlePress={handlePress} />
            )}/>
           </View>
           <Button buttonPress={handleOpen} buttonHeight={44} buttonWidth={'100%'} buttonText={"Withdraw"} backgroundColor={COLORS.lightBlue} textColor={COLORS.white} textSize={14} marginTop={10} />
           <Button buttonHeight={44} buttonWidth={'100%'} buttonText={"Cancel"} backgroundColor={COLORS.cancel} textColor={COLORS.white} textSize={14} marginTop={9} />
        </ScrollView>
        <BottomSheetModal 
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        backdropComponent={renderBackdrop}
        backgroundStyle={{backgroundColor: COLORS.lightGrey, borderTopLeftRadius: 26, borderTopRightRadius: 26}}
        >
            <BottomSheetView style={styles.set}>
                <Text style={styles.head}>Transaction Summary</Text>
                <Text style={styles.smallHead}>Please review the details of your transaction</Text>
                <Listed title={"Transaction Type"} answer={"Wallet Withdrawal"} />
                <Listed title={"Amount"} answer={50000} />
                <Listed title={"Fee"} answer={25} />
                <Listed answer={50025} />
                <Button buttonPress={handleNext} buttonHeight={44} buttonWidth={'100%'} buttonText={"Continue"} backgroundColor={COLORS.lightBlue} textColor={COLORS.white} textSize={14} marginTop={10} />
                <Button buttonHeight={44} buttonWidth={'100%'} buttonText={"Cancel"} backgroundColor={COLORS.cancel} textColor={COLORS.white} textSize={14} marginTop={9} />
            </BottomSheetView>
        </BottomSheetModal>
        <BottomSheetModal 
        ref={bottomSheetModalRef2}
        snapPoints={snapPoints}
        index={1}
        backdropComponent={renderBackdrop}
        backgroundStyle={{backgroundColor: COLORS.lightGrey, borderTopLeftRadius: 26, borderTopRightRadius: 26}}
        >
            <BottomSheetView style={styles.set}>
                <Text style={styles.head}>Add New Bank</Text>
                <BottomSheetView style={styles.inputContainerHolder}>
                <AmountInput 
                control={control}
                name={'accountnumber'} 
                rules={{}}
                placeholder={''}
                label={"Account number"}
                borderColor={COLORS.bb}
                backgroundColor={COLORS.white}
                />
                <View style={styles.select}>
                    <Text style={styles.err}>Bank Name</Text>
                    <DropDownPicker items={items} open={open} value={valu} setOpen={()=>setOpen(!open)} setValue={(val)=>setValu(val)} placeholder='' style={{borderColor: COLORS.bb}} />
                </View>
                </BottomSheetView>
                <Button buttonHeight={44} buttonWidth={'100%'} buttonText={"Add bank"} backgroundColor={COLORS.lightBlue} textColor={COLORS.white} textSize={14} marginTop={20} />
            </BottomSheetView>
        </BottomSheetModal>
        <BottomSheetModal 
        ref={bottomSheetModalRef3}
        snapPoints={snapPoints}
        index={1}
        backdropComponent={renderBackdrop}
        backgroundStyle={{backgroundColor: COLORS.lightGrey, borderTopLeftRadius: 26, borderTopRightRadius: 26}}
        >
            <BottomSheetView style={styles.set}>
                <Text style={styles.head}>Enter 4 Digit Pin</Text>
                <Text style={styles.smallHead}>Enter your 4 Digit PIN to authorize this transaction</Text>
                <CodeField 
                ref={ref}
                {...props}
                value={value}
                onChangeText={(text)=>setValue(text.replace(/[^0-9]/g, ''))}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
                />
            </BottomSheetView>
        </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20
    },
    withdraw: {
        color: COLORS.lightBlue,
        fontSize: 28,
        fontWeight: 'bold'
    },
    try: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 24
    },
    bold: {
        fontWeight: '500',
        fontSize: 14,
        color: COLORS.bb
    },
    listContainer: {
        width: '100%',
    },
    set: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    head: {
        fontSize: 20,
        color: COLORS.fool,
        fontWeight: 'bold'
    },
    smallHead: {
        fontSize: 12,
        color: COLORS.sss, 
        marginTop: 5
    },
    inputContainerHolder : {
        marginTop: 16,
        width: '100%'
    },
    select: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 16
    },
    err: {
        fontSize: 18,
        color: COLORS.bb
    },
    codeFieldRoot: {
        marginVertical: 32,
        width: '100%'
    },
    cell: {
      width: width/5,
      height: width/5,
      textAlign: 'center',
      lineHeight: 70,
      fontWeight: '500',
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 7,
      borderColor: COLORS.bb,
      backgroundColor: COLORS.white,
      color: "#000"
    },
    focusCell: {
        borderColor: COLORS.lightBlue,
      },
})

export default WithdrawScreen
