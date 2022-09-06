import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GroupChatImage from '../GroupChatImage/GroupChatImage';

type Props = {
  name: string;
}

export default function CommunityLink({name}: Props) {
  return (
  <TouchableOpacity style={styles.item}>
      <Image source={require('../../../assets/user_default.jpg')} style={styles.image} resizeMode={'cover'} />
      <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '48%',
    aspectRatio: 1 /1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    margin: 4,
  },
  name: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",    
  }
});