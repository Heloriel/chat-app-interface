import React from 'react';
import { View, StyleSheet } from 'react-native';
import CallLink from '../CallLink/CallLink';
import SmallCatName from '../SmallCatName/SmallCatName';

export default function CallsList() {
  return (
    <View style={styles.container}>
      <SmallCatName title='Recent' py={8} />
      <CallLink status='received' />
      <CallLink status='lost' />
      <CallLink status='made' />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 16,
    paddingBottom: 32,
  },
});