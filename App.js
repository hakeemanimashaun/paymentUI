import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import BillPayment from './screens/billpayment/BillPayment';
import HomePage from './screens/homepage/HomePage';
import { styles } from './screens/homepage/styles';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer>
     <Navigation/>
    </NavigationContainer>
  );
}


