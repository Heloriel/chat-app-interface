import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icons from "@expo/vector-icons/MaterialIcons";

type Props = {
  status: 'received' | 'lost' | 'made';
}

export default function CallStatus({status}: Props) {
  return (
    <View>
      {status == 'received' && <Icons name="call-received" size={24} color="#1D2757" style={[styles.callStatus, styles.received]}/>}
      {status == 'made' && <Icons name="call-made" size={24} color="#1D2757" style={[styles.callStatus, styles.made]}/>}
      {status == 'lost' && <Icons name="call-missed" size={24} color="#1D2757" style={[styles.callStatus, styles.lost]}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  callStatus: {
    borderRadius: 8,
    padding: 4,
    color: "#fff",
  },
  received: {
    backgroundColor: '#16A34A',
  },
  made: {
    backgroundColor: '#0891B2',
  },
  lost: {
    backgroundColor: '#B91C1C',
  },
});