import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import GroupChatLink from '../GroupChatLink/GroupChatLink';

const DATA = [
  {
    id: 'bd7acbea-c1b1321-46c2-aed5-3ad53abb28ba',
    name: 'Work',
  },
  {
    id: '3ac68afc-c605123-48d3-a4f8-fbd91aa97f63',
    name: 'School',
  },
  {
    id: '3ac68afc-c605123-48d3-a4f8-fbd91aa97f63',
    name: 'School',
  },
];

export const GroupChatList = () => {
  const renderItem = ({ item }) => (
    <GroupChatLink name={item.name} />
  );

  return (
    <View >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
});