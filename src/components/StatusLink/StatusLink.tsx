import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StatusPreview from '../StatusPreview/StatusPreview';

type Props = {
  opened?: boolean;
}

export default function StatusLink({ opened }: Props) {
  return (
     <TouchableOpacity>
       <View style={styles.container}>
        <View style={styles.preview}>
          { opened ? <StatusPreview viewed /> :  <StatusPreview />}
        </View>
        <View>
          <View>
            <Text style={styles.name}>Name</Text>
          </View>
          <View>
            <Text style={styles.time}>20 hours ago</Text>
          </View>
        </View>
           </View>
     </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  preview: {
    marginRight: 16,
  },
  name:{
    fontSize: 16,
  },
  time: {
    fontSize: 10,
    color: '#808080',
  },
});