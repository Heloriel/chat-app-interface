import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';

type Props = {
  children: React.ReactNode;
}

export interface IHomeContext {
  currentTemplate: 'chats' | 'status' | 'calls';
  setCurrentTemplate: Function;
}

export const Context = createContext<IHomeContext>({} as IHomeContext);

export default function HomeContext({children}: Props) {
  const [currentTemplate, setCurrentTemplate] = useState('chats' as const);
  const contextPack = {currentTemplate, setCurrentTemplate};
  return (
    <Context.Provider value={contextPack}>
      {children}
    </Context.Provider>
  )
}