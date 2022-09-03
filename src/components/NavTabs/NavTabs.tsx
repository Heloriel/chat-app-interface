import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Lato_400Regular ,useFonts } from '@expo-google-fonts/lato';

export default function NavTabs() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.navItem, styles.navItemActive]}><Text style={styles.navItemText}>Chats</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navItemText}>Staus</Text></TouchableOpacity>
      <TouchableOpacity style={styles.navItem}><Text style={styles.navItemText}>Calls</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#35489F',
    borderRadius: 50,
    height: 58,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  navItem: {
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  navItemActive: {
    backgroundColor: '#1D2757',
  },
  navItemText: {
    color: '#FFF',
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
  },
});