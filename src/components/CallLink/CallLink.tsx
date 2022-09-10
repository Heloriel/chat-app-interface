import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StatusPreview from '../StatusPreview/StatusPreview';
import Icons from '@expo/vector-icons/MaterialIcons'

type Props = {
  opened?: boolean;
}

export default function CallLink({ opened }: Props) {
  return (
       <View style={styles.container}>
        <TouchableOpacity style={styles.user}>
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
        </TouchableOpacity>
        <View style={styles.actionsContainer}>
          <Icons name="call" size={24} color="#1D2757" style={styles.action} />
          <Icons name="block" size={24} color="#1D2757" style={styles.action} />
        </View>        
        <View>
          <Icons name="call-missed" size={24} color="#1D2757" style={styles.callStatus}/>
        </View>        
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  user: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  action: {
    marginHorizontal: 10,
  },
  callStatus: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 8,
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