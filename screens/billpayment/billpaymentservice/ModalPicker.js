import {  View, Text,TouchableOpacity,Dimensions, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const options=["MTN","GLO", "Airtel","9Mobile"]
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const  ModalPicker=(props)=> {

const onPressItem = (option)=>{
props.changeModalVisibility(false);
props.setData(option);
}

const option = options.map((item, index )=>{
    return(
        <TouchableOpacity
        style={modalstyles.option }
        key={index}
        onPress={()=>onPressItem(item)}
        >
            <Text style={modalstyles.text}>
                {item}
            </Text>
        </TouchableOpacity>
    )
})

  return (
    <TouchableOpacity
    onPress={()=>props.changeModalVisibility(false)}
    style={modalstyles.container}
    >
        <View style={[modalstyles.modal, {width: width - 40, height: height/2.7}]}>
            <ScrollView>
                {option}
            </ScrollView>
        </View>

    </TouchableOpacity>
  )
}
const modalstyles =StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    modal:{
         backgroundColor: 'white',
         borderRadius: 10, 
    },
    option: {
        alignItems: 'flex-start',

    },
    text:{
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
    })
 
export {ModalPicker}