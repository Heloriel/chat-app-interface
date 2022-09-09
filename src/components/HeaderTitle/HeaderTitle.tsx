import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Lato_700Bold, useFonts } from '@expo-google-fonts/lato';
import { Context, ISearchContext } from '../../contexts/SearchContext';
import SearchBar from '../SearchBar/SearchBar';

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

  const context = useContext<ISearchContext>(Context);

  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>{leftIcon}</View>
      <View style={styles.middle}>{context.searchOpen ? <SearchBar /> : <Text style={styles.screenTitle}>{title}</Text>}</View>
      <View style={styles.rightIcon}>{rightIcon}</View>
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
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  middle: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});