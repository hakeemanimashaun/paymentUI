import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export const CartegoryButtonGroup=({buttons, doSomethingAfterClick}) =>{

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
                <TouchableOpacity
                onPress={(item)=>handleClick(item, index)} 
                key={index}
                style={[index === clickedId? styles.buttonActive: styles.button,
                index === 0 ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}: '',
                index === 1 ? {borderTopRightRadius: 10, borderBottomRightRadius: 10}: '',
                ]}
                >
                  <Text style={[index === clickedId? styles.textActive: styles.text]}>{buttonLabel}</Text>
                </TouchableOpacity>
            )
        })
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginVertical: 10,
    flexDirection: 'row',
  },
  button:{
    flex: 1,
    height: 30,
    alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0.5,
     borderColor: 'black',
  },
  buttonActive:{
      flex: 1,
      height: 30,
      alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 0.5,
     borderColor: 'black',
     backgroundColor: '#F1F1F1'

  },
  text:{
    color: "black",
  },
  textActive:{
    color: '#548E4E',
  }
})