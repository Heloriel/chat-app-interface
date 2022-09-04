import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function UserAvatar() {
  return <Image source={require('../../../assets/user_default.jpg')} style={styles.avatarImage} />;
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 54,
    height: 54,
    borderRadius: 32,
  }
});