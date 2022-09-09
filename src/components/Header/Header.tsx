import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import HeaderTitle from '../HeaderTitle/HeaderTitle'
import NavTabs from '../NavTabs/NavTabs';
import SearchContext from '../../contexts/SearchContext';

type Props = {
  title: string;
  leftIcon?: React.ReactNode | undefined;
  rightIcon?: React.ReactNode | undefined;
}

export default function Header({title,leftIcon,rightIcon}: Props) {
  return (
    <View style={styles.container}>
      <SearchContext>
        <HeaderTitle title={title} leftIcon={leftIcon} rightIcon={rightIcon} />
      </SearchContext>
      <View style={{paddingHorizontal: 10}}>
        <NavTabs />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
});