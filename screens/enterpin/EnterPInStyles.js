import { StyleSheet } from "react-native";

export const pinstyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },

    codeContainer:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '40%',
        marginHorizontal: '30%',
    },
    code:{
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    code1:{
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#000'
    },
    code2:{
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: '#000'
    },
    numberBackground:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberContainer:{
         marginTop: 20,
         width: 282,
         height: 348,
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',
         flexWrap: 'wrap'
    },
    number:{
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,

    },
    numbertext:{
       fontSize: 25,
       color:'#fff',
       letterSpacing: 0,
       textAlign: 'center'
    },
    imageContainer:{
        alignItems: 'center',
         justifyContent: 'center',
    },
    textContainer:{
        marginVertical: 10,
        alignItems: 'center',
         justifyContent: 'center',
    },
    image:{
        marginVertical: 20,
    }

})
