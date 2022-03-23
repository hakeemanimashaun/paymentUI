import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import AirtimeServices from '../../components/AirtimeServices'
import SearchBar from '../../components/SearchBar'
import ElectricityServices from '../../components/ElectricityServices'
import { billstyles } from './BillStyles'
import TvBills from '../../components/TvBills'
import InternetServices from '../../components/InternetServices'

export default function BillPayment({navigation}) {
  return (
    <View style={billstyles.container}>
      <View style={billstyles.searchview}>

      <SearchBar />
      </View>
      <ScrollView>
      <View style={billstyles.emptytinyview}></View>
     <AirtimeServices/>
     <ElectricityServices />
     <View style={billstyles.emptysmallview}></View>
     <TvBills />
     <View style={billstyles.emptysmallview}></View>
     <InternetServices />
     <View style={billstyles.emptysmallview}></View>
      </ScrollView>
    </View>
  )
}