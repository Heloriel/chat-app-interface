import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommunityLink from '../CommunityLink/CommunityLink';

const DATA = [
  {
    id: 'bd7acbea-c1b1321-46c2-aed5-3ad53abb28ba',
    name: 'Work',
  },
  {
    id: '3ac68afc-c605123-48d3-a4f8-fbd91aa97f63',
    name: 'School',
  },
];

export const CommunityList = () => {
  return (
    <View style={styles.container}>
      {DATA.map((item)=>{
        return(
          <CommunityLink name={item.name} key={item.id} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 2,
    marginBottom: 64,
  },
});