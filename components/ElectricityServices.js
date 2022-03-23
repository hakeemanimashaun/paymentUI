import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function ElectricityServices() {
  return (
    <View style={styles.container}>
            <Text>Electricity</Text>
        <View style={styles.electricservices}>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/electricity/ikejaelectric.png')}
                />
                <Text style={styles.text}>IKEDC</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/electricity/ekedc.png')}
                />
                <Text style={styles.text}>EKEDC</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/electricity/aedc.png')}
                />
                <Text style={styles.text}>Abuja</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/electricity/aedc.png')}
                />
                <Text style={styles.text}>Abuja</Text>
            </Pressable>

        </View>
            <Pressable style={styles.viewall}>
                <Text style={styles.viewalltext}>view all</Text>
            </Pressable>
</View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
    },
    electricservices:{
        flexDirection: "row",
        paddingTop: 10,
        justifyContent: 'space-around',
    },
    viewall:{
        marginTop: 15,
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    viewalltext:{
        marginRight: "5%",
        color: '#90EE90',
        fontWeight: '600',
    },
    text:{
        marginTop: 10,
    },
    Pressable:{
        justifyContent:'center',
        alignItems: 'center',
    }
})