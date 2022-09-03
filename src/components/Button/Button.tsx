import { TouchableOpacity, Text, StyleSheet, ButtonProps, TouchableOpacityProps } from 'react-native';
import React from 'react';
import {Lato_400Regular, useFonts} from '@expo-google-fonts/lato';

interface Props extends TouchableOpacityProps {
    variant?: 'primary' | 'secondary';
    title?: string;
  }

export function Button({ variant = 'primary', title, ...rest }: Props) {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  const buttonVariant = variant;

  return (
    <TouchableOpacity style={styles[buttonVariant]} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
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