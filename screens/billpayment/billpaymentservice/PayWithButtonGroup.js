import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import image1 from "../../../assets/Icons/wallet.jpg"
import image2 from "../../../assets/Icons/fcmbicon.png"
import image3 from "../../../assets/Icons/gticon.png"

export const PayWithButtonGroup=({buttons, doSomethingAfterClick}) =>{

  
  const [clickedId, setClickedId]=useState(0)
  const handleClick = (item, id) => {
    setClickedId(id)
    doSomethingAfterClick(item)
  }

  return (
    <View style={styles.container}>
      {
        buttons.map((buttonLabel, index)=>{
            return(
              <View>
                <TouchableOpacity
                onPress={(item)=>handleClick(item, index)} 
                key={index}
                style={[index === clickedId? styles.buttonActive: styles.button, 
                  index === 0 ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}: '',
                  index === 1 ? {borderTopRightRadius: 10, borderBottomRightRadius: 10}: '',
                ]}
                >
                <View style={styles.radioContainer}>
                  <Image 
                  style={styles.image} 
                  source={index ===0 ? image1 : index===1 ? image2 : image3}
                  />
                <Text style={[index === clickedId? styles.textActive: styles.text]}>{buttonLabel}</Text>
                  <View style={[index === clickedId? styles.radioActive: styles.radio]}></View>
                  </View>
                </TouchableOpacity>
                <View style={styles.view}></View>
              </View>

            )
        })
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
    width: '100%',
  },
  button:{
    width: '100%',
    height: 50,
    alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0.5,
     borderColor: '#F1F1F1',
     borderTopLeftRadius: 10, 
     borderBottomLeftRadius: 10, 
     borderTopRightRadius: 10, 
     borderBottomRightRadius: 10
  },
  buttonActive:{
      height: 50,
      alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0.5,
     borderColor: '#F1F1F1',
     backgroundColor: '#F1F1F1',
     borderTopLeftRadius: 10, 
     borderBottomLeftRadius: 10, 
     borderTopRightRadius: 10, 
     borderBottomRightRadius: 10

  },
  text:{
    color: "black",
    marginRight: 55,
  },
  textActive:{
    color: 'black',
    marginRight: 55,
  },
  radio:{
    marginLeft: 15,
    borderRadius: 50,
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  radioActive:{
    marginLeft: 15,
    borderRadius: 50,
    width: 15,
    height: 15,
    borderWidth: 3.5,
    borderColor: 'green',
  },
  radioContainer:{
    flexDirection:'row',
  },
  image:{
    marginRight: 15,
    width: 15,
    height: 15
  },
  view:{
    backgroundColor: '#ffffff',
    paddingVertical: 7,
  }
})