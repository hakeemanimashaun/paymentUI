import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function InternetServices() {
  return (
    <View style={styles.container}>
        <Text>Internet Services</Text>
        <View style={styles.internetservices}>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/internetservices/smile.png')}
                />
                <Text style={styles.text}>Smile</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/internetservices/spectranet.png')}
                />
                <Text style={styles.text}>Spectranet</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/internetservices/spectranet.png')}
                />
                <Text style={styles.text}>Spectranet</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/internetservices/spectranet.png')}
                />
                <Text style={styles.text}>Spectranet</Text>
            </Pressable>

        </View>
            <Pressable  style={styles.viewall}>
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
    internetservices:{
        flexDirection: "row",
        paddingTop: 20,
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