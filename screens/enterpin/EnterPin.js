import { View, Text, StatusBar, Image  } from 'react-native'
import React,{useState} from 'react'
import { pinstyles } from './EnterPInStyles'


export default function EnterPin() {
    const [rechargeAmount,setRechargeAmount] = useState('1000')
    const [pin,setpin] = useState(['1','2','3','4'])
    const numbers = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 0}
        ] 
    return (
    <View style={pinstyles.container}>
        <StatusBar barStyle='light-content'/>
        <View style={pinstyles.imageContainer}>
        <Image
        style={pinstyles.image} 
        source={require('../../assets/images/airtime/mtn.png')}
        />
        <Text>MTN</Text>
        </View>
        <View style={pinstyles.textContainer}>
        <Text>{rechargeAmount}</Text>
        <Text>Enter your tansaction pin to</Text>
        <Text>completethis payment</Text>

        </View>
      <View style={pinstyles.codeContainer}>
          {/* {
              pin.map((p, index)=>{
                let style = p !=''?pinstyles.code2: pinstyles.code1;
                <View style={style}>{pin[index]}</View>
              })
          } */}
            <View style={pinstyles.code}></View>
            <View style={pinstyles.code}></View>
            <View style={pinstyles.code}></View>
            <View style={pinstyles.code}></View>
      </View>
      <View style={pinstyles.numberBackground}>
            <View style={pinstyles.numberContainer}>

                {/*                 
                     {
                        numbers.map((num, index)=>{
                    <View style={pinstyles.number} key={num.id}>
                        <Text style={pinstyles.numbertext}>{num.id}</Text>
                    </View>
                        })
                    } */}
                
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>1</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>2</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>3</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>4</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>5</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>6</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>7</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>8</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>9</Text>
                </View>
                <View style={pinstyles.number}>
                    <Text style={pinstyles.numbertext}>0</Text>
                </View>
            </View>
      </View>
    </View>
  )
}