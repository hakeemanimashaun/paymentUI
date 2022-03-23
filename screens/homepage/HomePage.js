import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React,{ useState }  from 'react'
import { styles } from './styles'
import { Input } from 'react-native-elements'
import SearchBar from '../../components/SearchBar'
import MiniBillPayment from '../../components/MiniBillPayment'


export default function HomePage({navigation}) {
    const [walletBalance, setWalletBalance] = useState("0.00")
    const [credit, setCredit] = useState("100.00")
    const [debit, setdebit] = useState("100.00")
    const [showMore, setShowmore] = useState(false)
    const [accountNumber, setAccountNumber] = useState("1007856777")
    
    const toggleShowMore = () => {
        if(showMore === false){
            setShowmore(true)
        }else{
            setShowmore(false)
        }
    }
    
    const renderMiniBillPayment=()=>{
        return(
            <MiniBillPayment />
        )
    }
   
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.lefttext}>
                <Text style={styles.topline}>Good Afternoon</Text>
                <Text style={styles.bottomline}>Tola</Text>
            </View>
            <View style={styles.righttext}>
                <Text style={[styles.topline, styles.subject]}>{'\u20A6'}{walletBalance}</Text>
                <Text  style={styles.bottomline}>Wallet Balance</Text>
            </View>
        </View >
        <ScrollView style={styles.scrollview}>
                <View style={styles.paymentservices}>
                            <View style={styles.toppaymentview}>
                                <View style={styles.circularview}>
                                    <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/Icons/sail.png')}
                                    />
                                </View>
                                    <Text style={styles.greentext}>Send Money</Text>
                            </View>
                
                        <View style={styles.midsectionpayment}>
                            <View>

                                <View style={styles.circularviewwebp}>
                                    <Image
                                    style={styles.webp}
                                    source={require('../../assets/Icons/icons_circle.webp')}
                                    />
                                </View>
                                    <Text style={styles.greentext}>Link Account</Text>
                            </View>
                    
                            <View style={styles.paybillsview}>
                                    <View style={styles.circularview}>
                                        <Pressable
                                        onPress={()=>navigation.navigate("BillPayment")}>

                                        <Image
                                        style={styles.tinyLogo}
                                        source={require('../../assets/Icons/local_badge.png')}
                                        />
                                        </Pressable>
                                    </View>
                                        <Text style={styles.greentext}>Pay Bills</Text>
                            </View>
                        </View>
                        <View style={styles.bottompaymentview}>
                            <View style={styles.circularview}>
                                <Image
                                style={styles.tinyLogo}
                                source={require('../../assets/Icons/sail.png')}
                                />
                            </View>
                            <Text style={styles.greentext}>Request Money</Text>
                        </View>
                        <View style={styles.accountnumber}>
                            <Text style={styles.circularview}>Account Number-{accountNumber}</Text>
                        </View>
                </View>

                    <View style={styles.searchbarview}>
                    <SearchBar
                    />
                    </View>
                        <View>
                        <Text style={styles.transactiontextheader}>Recent Transaction</Text>
                        <Text style={styles.transactiontextdate}>Saturday, 11 February </Text>
                        </View>
                    <View  style={styles.recenttransaction}>

                        <View style={styles.trasactionitem}>
                            <Image
                            style={styles.trasactionitemLogo}
                            source={require('../../assets/images/banklogo.png')}
                            />
                            <View style={styles.trasactionitemtextview}>
                                <Text>Sambo Omolola Olanrewaju</Text>
                                <Text style={styles.lighttext}>Bank transfer from Razaq Agboola</Text>
                            </View>
                            <Text style={styles.trasactionitemnumberviewcredit}>{'\u20A6'}{credit}</Text>
                        </View>
                        <View style={styles.trasactionitem}>
                            <Image
                            style={styles.trasactionitemLogo}
                            source={require('../../assets/images/banklogo.png')}
                            />
                            <View style={styles.trasactionitemtextview}>
                                <Text>Sambo Omolola Olanrewaju</Text>
                                <View style={styles.viewdebit}>

                                <Text style={styles.lighttext}>Transfer to Razaq Agboola</Text>
                            <Text style={styles.trasactionitemnumberviewdebit}>{'\u20A6'}{debit}</Text>
                            </View>
                                </View>
                        </View>
                    </View>
                    <Pressable
                    style={styles.showmore} 
                        onPress={()=>toggleShowMore()}>
                        <Text style={[styles.greentext,{ fontSize: 15, fontWeight: '700'}]}>{showMore? `Show Less ${'\u2303'}` : `Show More ${'\u2304'}`}</Text>
                    </Pressable>
                        <View>
                            {showMore ?renderMiniBillPayment() : null}
                        </View>
        </ScrollView>
            
        
    </View>
  )
}