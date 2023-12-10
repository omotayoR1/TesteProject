import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import { ROUTES } from './src/constants';
import Login from './src/components/screens/Login';
import Wallet from './src/components/screens/Wallet';
import WithdrawScreen from './src/components/screens/WithdrawScreen';

const Stack = createStackNavigator();

const MyScreens = ()=>{
    return(
        <Stack.Navigator initialRouteName={ROUTES.LOGIN} >
            <Stack.Screen 
            name={ROUTES.LOGIN} 
            component={Login} 
            options={{
                headerShown: false
            }}/>
            <Stack.Screen 
            name={ROUTES.WALLET}
            component={Wallet}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen 
            name={ROUTES.WITHDRAW}
            component={WithdrawScreen}
            options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
}

const Routes = ()=> {
    return (
      <NavigationContainer>
        <MyScreens />
      </NavigationContainer>
    )
}

export default Routes
