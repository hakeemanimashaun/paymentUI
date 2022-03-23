import { StyleSheet } from "react-native";

export const airtimestyles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        alignItems:"flex-start",
        justifyContent: 'center',
        padding: 10,
    },
    text:{
        marginVertical: 10,
        fontSize: 15,
    },
    subject:{
        marginVertical: 10,
        fontSize: 15,
        fontWeight:'bold'
    },
    touchableOpacity:{
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: '#ffffff',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    phoneRow:{
        flexDirection: 'row',
    },
    payRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    textInput:{
        borderRadius: 5,
        borderWidth: 0.5,
        width: "100%",
        height: 35,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    phoneTextInput:{
        borderRadius: 5,
        borderWidth: 0.5,
        width: "75%",
        height: 35,
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    button:{
       borderTopRightRadius: 5,
       borderBottomRightRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
    },
    horizontalLine:{
        width: "38%",
        borderBottomWidth: 1,
        
    },
    image:{
        width: 10,
        height: 10,
    },
    title:{
       fontSize: 15     
    },
    touchableProceed:{
        backgroundColor: '#C0D73E',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        marginHorizontal: 5,
        height: 50,
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    view:{
        backgroundColor: '#ffffff',
        paddingVertical: 10,
      },
      opacityText:{
          color: '#fff'
      }
})