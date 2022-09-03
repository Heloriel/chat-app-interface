import React from 'react';
import { View, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

type Props = {
  title: string;
  py?: number,
}

export default function SmallCatName({ title, py = 0}: Props) {
  return (
    <View>
      <Text style={[styles.title, {paddingVertical: py}]}>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 16,
  }
})