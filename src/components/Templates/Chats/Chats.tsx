import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TemplateHeader from '../TemplateHeader/TemplateHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import SmallCatName from '../../SmallCatName/SmallCatName';

export default function Chats() {
  return (
    <View>
      <TemplateHeader title="Chats" actionMenu={<TouchableOpacity><Ionicons name='filter' size={28} /></TouchableOpacity>} />
      <SmallCatName title="Friends" py={16} />
    </View>
  )
}