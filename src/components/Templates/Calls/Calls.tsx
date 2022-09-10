import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Icons from '@expo/vector-icons/MaterialIcons';
import CallsList from '../../CallsList/CallsList';

export default function Status() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemplateHeader title="Calls" actionMenu={<TouchableOpacity><Icons name='clear' size={28} /></TouchableOpacity>} />
          <CallsList />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  scrollView:  {
    paddingTop: 32,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  }
});