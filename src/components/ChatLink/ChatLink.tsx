import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import UserAvatar from '../UserAvatar/UserAvatar';
import {} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationParamsList } from '../../@types/types';

export interface IChatProps {
  navigation: NativeStackNavigationProp<NavigationParamsList>;
  name: string;
}

export default function ChatLink({ name, navigation }: IChatProps) {  
  function openChat(){
    navigation.navigate('chat');   
  }

  return (
  <TouchableHighlight underlayColor={"#F5F5F5"} onPress={() => openChat()}>
    <View style={styles.item}>
      <UserAvatar />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>Lorem ipsun dolor sit amet.</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>09:00</Text>
      </View>
    </View>
  </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  content: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: 16
    ,
  },
  timeContainer: {
    paddingHorizontal: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#888888'
  },
});