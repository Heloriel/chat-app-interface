import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icons from "@expo/vector-icons/Ionicons";

type Color = `#${string}` | `rgb(${number},${number},${number})`;

type Props = {
  color?: Color;
  size?: number;
}

export default function BackButton({color = "#fff",size = 28}: Props) {
  return (
    <TouchableHighlight>
      <Icons name="caret-back" color={color} size={size}/>
    </TouchableHighlight>
  )
}