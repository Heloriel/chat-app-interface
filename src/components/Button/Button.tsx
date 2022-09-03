import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import {Lato_400Regular, useFonts} from '@expo-google-fonts/lato';

type Props = {
    variant?: 'primary' | 'secondary';
    children: string | React.ReactNode;
}

export function Button({ children, variant = 'primary' }: Props) {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  const buttonVariant = variant;

  return (
    <TouchableOpacity style={styles[buttonVariant]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    primary:{
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 32,
        backgroundColor: '#60A5FA',        
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Lato_400Regular',            
        color: '#fff',
     },
});