import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from '../components/Templates/Chats/Chats';
import SearchButton from '../components/SearchButton/SearchButton';

export default function Home({navigation}) {
  const route = useRoute();

  return (
    <SafeAreaView style={[styles.body, StyleSheet.absoluteFill]}>
          <StatusBar style={'light'} backgroundColor={"#1D2757"} translucent />
          <Header title={route.name} leftIcon={<Ionicons name='camera' size={28} color="#fff" />} rightIcon={<SearchButton />} />
          <Chats />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#1D2757',
  },
});