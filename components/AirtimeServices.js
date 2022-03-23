import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function AirtimeServices() {
    const navigation = useNavigation()

  return (
    <View style={styles.container}>
       <Text>Airtime</Text>
        <View style={styles.airtimeservices}>
            <Pressable
            style={styles.Pressable}
             onPress={()=>navigation.navigate("Airtime")}
            >
                <Image
                source={require('../assets/images/airtime/mtn.png')}
                />
                <Text style={styles.text}>MTN</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/airtime/airtel.png')}
                />
                <Text style={styles.text}>Airtel</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/airtime/9mobile.png')}
                />
                <Text style={styles.text}>9Mobile</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/airtime/glo.png')}
                />
                <Text style={styles.text}>glo</Text>
            </Pressable>

        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },
    airtimeservices:{
        flexDirection: "row",
        paddingTop: 20,
        justifyContent: 'space-around',
    
    },
    text:{
        marginTop: 10,
    },
    Pressable:{
        justifyContent:'center',
        alignItems: 'center',
    }
})