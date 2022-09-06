import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Icons from '@expo/vector-icons/MaterialIcons';
import SmallCatName from '../../SmallCatName/SmallCatName';
import { ChatList } from '../../ChatList/ChatList';
import { GroupChatList } from '../../GroupChatList/GroupChatList';
import SeeAllLink from '../../SeeAllLink/SeeAllLink';
import { CommunityList } from '../../CommunityList/CommunityList';

export default function Chats() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <TemplateHeader title="Chats" actionMenu={<TouchableOpacity><Icons name='filter-list' size={28} /></TouchableOpacity>} />
          <View style={styles.categoryHeader}>
            <SmallCatName title="Friends" py={16} />
            <SeeAllLink />
          </View>
          <ChatList />
          <View style={styles.categoryHeader}>
            <SmallCatName title="Group Chats" py={16} />
            <SeeAllLink />
          </View>
          <GroupChatList />
          <View style={styles.categoryHeader}>
            <SmallCatName title="Communities" py={16} />
            <SeeAllLink />
          </View>
          <CommunityList />
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