import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function TvBills() {
  return (
    <View style={styles.container}>
            <Text>TV Bills</Text>
        <View style={styles.tvbillsservices}>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/tvbills/DStv.png')}
                />
                <Text style={styles.text}>DSTV</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/tvbills/GOtv.png')}
                />
                <Text style={styles.text}>GOTV</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/tvbills/DStv.png')}
                />
                <Text style={styles.text}>DSTV</Text>
            </Pressable>
            <Pressable style={styles.Pressable}>
                <Image
                source={require('../assets/images/tvbills/DStv.png')}
                />
                <Text style={styles.text}>DSTV</Text>
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
    tvbillsservices:{
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