import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GroupChatImage from '../GroupChatImage/GroupChatImage';

type Props = {
  name: string;
}

export default function GroupChatLink({name}: Props) {
  return (
  <TouchableOpacity style={styles.item}>
    <GroupChatImage />
    <View style={styles.content}>
      <Text style={styles.name}>{name}</Text>
      <Text>09:00</Text>
    </View>
    <View style={styles.time}>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#e2e2e2',
    margin: 4,
  },
  content: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
  },
  time: {
    paddingHorizontal: 4,
  },
});