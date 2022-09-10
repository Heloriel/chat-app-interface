import React from 'react';
import { View, StyleSheet } from 'react-native';
import SmallCatName from '../SmallCatName/SmallCatName';
import StatusLink from '../StatusLink/StatusLink';

export default function StatusList() {
  return (
    <View style={styles.container}>
      <SmallCatName title='New' py={8} />
      <StatusLink />
      <StatusLink />
      <StatusLink />
      <SmallCatName title='Viewed' py={8} />
      <StatusLink opened />      
      <StatusLink opened />      
      <StatusLink opened />      
      <StatusLink opened />      
      <StatusLink opened />      
      <StatusLink opened />      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 16,
    paddingBottom: 32,
  },
});