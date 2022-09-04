import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default function SeeAllLink() {
  return (
    <TouchableHighlight >
      <View style={styles.seeAllButton}>
        <Text style={styles.seeAllButtonText}>SEE ALL</Text>
        <Icons name='caret-forward' size={16} color={"#F04544"} style={{marginLeft: 4}} />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  seeAllButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
  },
  seeAllButtonText:{
    fontWeight: 'bold',
    color: '#F04544',
    fontSize: 12,
  },
});