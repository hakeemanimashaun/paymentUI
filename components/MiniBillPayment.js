import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import AirtimeServices from './AirtimeServices'
import ElectricityServices from './ElectricityServices'
import InternetServices from './InternetServices'

export default function MiniBillPayment() {
  return (
    <View style={styles.container}>
        <Pressable>
        <Text style={styles.billtext}>Bill Payment</Text>
        </Pressable>
        <View style={styles.serviceoptions}>
            <Image
            style={styles.serviceoptionsimage}
            source={require('../assets/Icons/sail.png')}
            />
            <Image
            style={styles.serviceoptionsimage}
            source={require('../assets/Icons/account.png')}
            />
        </View>
        <AirtimeServices />
        <View style={styles.view}></View>
        <ElectricityServices/>
        <View style={styles.view}></View>
        <InternetServices/>
        <View style={styles.view}></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: "100%",
    justifyContent: 'center',
  },
  billtext:{
    marginVertical: 7,
    marginLeft: '5%',
    fontWeight: 'bold',
  },
    serviceoptions:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: "26%",
      borderRadius: 50,
      borderWidth: 0.5,
      height: 54,
      width: 174,
      shadowColor: 'black'
    },
    serviceoptionsimage:{
      marginHorizontal: 15,
      width: 23.5,
      height: 23,
    },
    view:{
      backgroundColor: '#ffffff',
      paddingVertical: 5,
    }
})