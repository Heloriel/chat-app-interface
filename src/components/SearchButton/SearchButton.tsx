import React, { useContext } from 'react';
import { TouchableHighlight } from 'react-native';
import Icons from "@expo/vector-icons/Ionicons";
import { Context, ISearchContext } from '../../contexts/SearchContext';

type Color = `#${string}` | `rgb(${number},${number},${number})`;

type Props = {
  color?: Color;
  size?: number;
}

export default function SearchButton({color = "#fff",size = 28}: Props) {
  const context = useContext<ISearchContext>(Context);

  function handlePress(){
    context.setSearchOpen(!context.searchOpen);
  }

  return (
    <TouchableHighlight onPress={handlePress}>
      {context.searchOpen ? <Icons name="close" color={color} size={size}/> : <Icons name="search" color={color} size={size}/>}
    </TouchableHighlight>
  )
}