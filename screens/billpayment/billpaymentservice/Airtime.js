import { View, Text, TouchableOpacity, Modal,TextInput, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { airtimestyles } from './AirtimeStyles';
import { ModalPicker } from './ModalPicker'
import { CartegoryButtonGroup } from './CartegoryButtonGroup';
import { PayWithButtonGroup } from './PayWithButtonGroup';


export default function Airtime({navigation}) {
  const[chooseData,setChooseData] = useState("Select Item...")
  const[isModalVisible,setIsModalVisible] = useState(false)

  const[walletBalance,setWalletBalance] = useState(0)
  const[fcmbBalance,setFcmbBalance] = useState(0)
  

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  const setData = (option) => {
    setChooseData(option)
  }

const printButtonLabel = ()=>{}
  return (
  <ScrollView>
    <View style={airtimestyles.container}>
      <Text  style={airtimestyles.text}>Network Provider</Text>
      <TouchableOpacity
      onPress={()=>changeModalVisibility(true)}
      style={airtimestyles.touchableOpacity}
      >
        <Text style={airtimestyles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal
      transparent={true}
      animationType='fade'
      visible={isModalVisible}
      onRequestClose={()=> changeModalVisibility(false)} 
      >
        <ModalPicker
         changeModalVisibility={ changeModalVisibility}
         setData={setData}
        />
      </Modal>
        <Text style={airtimestyles.text}>Category</Text>
         <CartegoryButtonGroup
         buttons={["mobile Top-up", "Data Bundle"]}
         doSomethingAfterClick={printButtonLabel} 
         />
          <Text style={airtimestyles.text}>Amount</Text>
          <TextInput
          placeholder={"Enter Amount"}
          style={airtimestyles.textInput}
          />
          <Text style={airtimestyles.text}>Phone Number</Text>
          <View style={airtimestyles.phoneRow}>
          <TextInput
          placeholder={"Enter Phone Number"}
          style={airtimestyles.phoneTextInput}
          />
          <TouchableOpacity
           style={airtimestyles.button}
          >
            <Text style={airtimestyles.title}>{<Image
            style={airtimestyles.image}
            source={require("../../../assets/Icons/contactbook.png")}
            />}Contact</Text>
          </TouchableOpacity>
          </View>
          <View style={airtimestyles.payRow}>
          <View style={airtimestyles.horizontalLine}></View>
          <Text style={airtimestyles.subject}> Pay With </Text>
          <View style={airtimestyles.horizontalLine}></View>
          </View>

          <PayWithButtonGroup 
          buttons={[
          `9PSB Wallet           Balance: ${walletBalance}`,
           `   Bank                    Balance: ${fcmbBalance}`, 
           `   Bank                     Balance: ${fcmbBalance}`
          ]}
          doSomethingAfterClick={printButtonLabel} 
          />
           <View style={airtimestyles.view}></View>
          <TouchableOpacity
          style={airtimestyles.touchableProceed}
          onPress={()=>navigation.navigate('EnterPin')}
          >
            <Text style={airtimestyles.opacityText}>Purchase</Text>
          </TouchableOpacity>
    </View>
    </ScrollView>
  )
}