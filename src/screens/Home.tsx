import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from '../components/Templates/Chats/Chats';

export default function Home({navigation}) {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.body}>
        <StatusBar style={'light'} backgroundColor={"#1D2757"} translucent />
        <Header title={route.name} leftIcon={<Ionicons name='camera' size={28} color="#fff" />} rightIcon={<Ionicons name='search' size={28} color="#fff" />} />
        <Chats />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#1D2757',
  },
});