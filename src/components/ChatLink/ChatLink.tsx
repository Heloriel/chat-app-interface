import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserAvatar from '../UserAvatar/UserAvatar';

type Props = {
  name: string;
}

export default function ChatLink({name}: Props) {
  return (
  <TouchableOpacity style={styles.item}>
    <UserAvatar />
    <View style={styles.content}>
      <Text style={styles.name}>{name}</Text>
      <Text>Lorem ipsun dolor sit amet.</Text>
    </View>
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>09:00</Text>
    </View>
  </TouchableOpacity>
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