import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Icon, Input } from "react-native-elements";
import searchIcon from '../assets/Icons/search.png'

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.searchview}>
      <Image style={styles.searchicon} source={searchIcon} />
      <TextInput style={styles.textinput} placeholder="search" />
    </View>
  );
}
const styles = StyleSheet.create({
  searchview: {
    flexDirection:'row',
    width: "90%",
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#F1F1F1',
    borderRadius: 5,
  },
  textinput: {
    marginBottom: 5,
    borderColor: "black",
    width: "90%",
    height: 35,
    backgroundColor: "#F1F1F1",
    marginHorizontal: 10,
  },
  searchicon:{
    marginLeft: 5,
    width: 15,
    height: 15,
  },
});
