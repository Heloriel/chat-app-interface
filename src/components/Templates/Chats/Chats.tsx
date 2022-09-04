import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Icons from '@expo/vector-icons/MaterialIcons';
import SmallCatName from '../../SmallCatName/SmallCatName';
import { ChatList } from '../../ChatList/ChatList';
import { GroupChatList } from '../../GroupChatList/GroupChatList';
import SeeAllLink from '../../SeeAllLink/SeeAllLink';

export default function Chats() {
  return (
    <View>
      <TemplateHeader title="Chats" actionMenu={<TouchableOpacity><Icons name='filter-list' size={28} /></TouchableOpacity>} />
      <View style={styles.categoryHeader}>
        <SmallCatName title="Friends" py={16} />
        <SeeAllLink />
      </View>
      <ChatList />
      <SmallCatName title="Group Chats" py={16} />
      <GroupChatList />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  }
});