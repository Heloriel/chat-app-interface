import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Lato_700Bold, useFonts } from '@expo-google-fonts/lato';

type Props = {
  title: string;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
}

export default function HeaderTitle({title,leftIcon,rightIcon}: Props) {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>{leftIcon}</View>
      <Text style={styles.screenTitle}>{title}</Text>
      <View>{rightIcon}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 24,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Lato_700Bold',
  },
});