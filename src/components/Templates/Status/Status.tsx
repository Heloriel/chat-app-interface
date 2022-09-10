import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Icons from '@expo/vector-icons/MaterialIcons';
import StatusList from '../../StatusList/StatusList';

export default function Status() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemplateHeader title="Status" actionMenu={<TouchableOpacity><Icons name='check-circle-outline' size={28} /></TouchableOpacity>} />
          <StatusList />
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