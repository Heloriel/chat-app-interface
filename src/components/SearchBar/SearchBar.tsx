import React from 'react';
import { StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import Icons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
return (
  <View style={styles.container}>
    <TextInput style={styles.input} placeholder={"Procurar..."} placeholderTextColor={"#dadada"}/>
    <TouchableHighlight style={styles.submitSearch}>
      <Icons name='search' size={24} color="#dadada"/>
    </TouchableHighlight>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    borderBottomWidth: 2,
    borderColor: "#fff"
  },
  input: {
    width: "100%",
    height: "100%",
    color: "#fff",
  },
  submitSearch: {
    position: 'absolute',
    right: 0,
  },
});