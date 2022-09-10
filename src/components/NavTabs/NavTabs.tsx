import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Lato_400Regular ,useFonts } from '@expo-google-fonts/lato';
import { Context, IHomeContext } from '../../contexts/HomeContext';

export default function NavTabs() {
  const hContext = useContext<IHomeContext>(Context);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if(!fontsLoaded){
    return null;
  }

  function handlePress(template: 'chats' | 'status' | 'calls'){
    hContext.setCurrentTemplate(template);
  }

  function isActive(template: 'chats' | 'status' | 'calls'){
    return template == hContext.currentTemplate && styles.navItemActive;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.navItem, isActive('chats')]} onPress={() => handlePress('chats')}><Text style={styles.navItemText}>Chats</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, isActive('status')]} onPress={() => handlePress('status')}><Text style={styles.navItemText}>Staus</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.navItem, isActive('calls')]} onPress={() => handlePress('calls')}><Text style={styles.navItemText}>Calls</Text></TouchableOpacity>
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