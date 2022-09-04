import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import SmallCatName from '../../SmallCatName/SmallCatName';
import { ChatList } from '../../ChatList/ChatList';
import { GroupChatList } from '../../GroupChatList/GroupChatList';

export default function Chats() {
  return (
    <View>
      <TemplateHeader title="Chats" actionMenu={<TouchableOpacity><Ionicons name='filter' size={28} /></TouchableOpacity>} />
      <SmallCatName title="Friends" py={16} />
      <ChatList />
      <SmallCatName title="Group Chats" py={16} />
      <GroupChatList />
    </View>
  )
}