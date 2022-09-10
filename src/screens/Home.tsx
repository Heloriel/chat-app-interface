import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import Chats from '../components/Templates/Chats/Chats';
import SearchButton from '../components/SearchButton/SearchButton';
import { Context as hContext, IHomeContext } from '../contexts/HomeContext';
import Status from '../components/Templates/Status/Status';

export default function Home({navigation}) {
  const route = useRoute();

  const homeContext = useContext<IHomeContext>(hContext);

  return (
      <SafeAreaView style={[styles.body, StyleSheet.absoluteFill]}>
            <StatusBar style={'light'} backgroundColor={"#1D2757"} translucent />
            <Header title={route.name} leftIcon={<Ionicons name='camera' size={28} color="#fff" />} rightIcon={<SearchButton />} />
            {homeContext.currentTemplate == 'chats' &&  <Chats />}
            {homeContext.currentTemplate == 'status' &&  <Status />}
            {homeContext.currentTemplate == 'calls' &&  <Chats />}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#1D2757',
  },
});