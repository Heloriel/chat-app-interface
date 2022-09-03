import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
    variant?: 'primary' | 'secondary';
    children: string | React.ReactNode;
}

export function Button({ children, variant = 'primary' }: Props) {
    const buttonVariant = variant; 

    return (
      <TouchableOpacity style={styles[buttonVariant]}>
        <Text style={styles.buttonText}>{ children }</Text>
      </TouchableOpacity>
    )
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
        color: '#fff',            
     },
});