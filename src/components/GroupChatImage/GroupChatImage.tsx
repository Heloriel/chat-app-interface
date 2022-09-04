import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function GroupChatImage() {
  return <Image source={require('../../../assets/user_default.jpg')} style={styles.avatarImage} />;
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 58,
    height: 58,
  }
});