import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  title: string,
  actionMenu?: React.ReactNode | undefined;
}

export default function TemplateHeader({title, actionMenu}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      {actionMenu}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});