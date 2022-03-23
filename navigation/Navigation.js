import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/homepage/HomePage';
import BillPayment from '../screens/billpayment/BillPayment';
import Airtime from '../screens/billpayment/billpaymentservice/Airtime';
import EnterPin from '../screens/enterpin/EnterPin';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
        <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="BillPayment" component={BillPayment}/> 
        <Stack.Screen name="Airtime" component={Airtime}/> 
        <Stack.Screen name="EnterPin" component={EnterPin} 
        //options={{headerShown: false }}
          /> 
      </Stack.Navigator>
  )
}