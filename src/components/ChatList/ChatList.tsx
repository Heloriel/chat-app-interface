import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ChatLink from '../ChatLink/ChatLink';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'John Doe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Jane Doe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Mr. Nobody',
  },
];

export const ChatList = () => {
  const renderItem = ({ item }) => (
    <ChatLink name={item.name} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});