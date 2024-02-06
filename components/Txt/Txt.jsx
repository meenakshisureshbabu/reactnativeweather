import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { s } from './Txt.style'

function Txt({ children,style }) {
const fontSize = style?.fontSize || s.txt.fontSize
const {height} = useWindowDimensions();
  return (
    <Text style={[s.txt,style,{fontSize: Math.round(fontSize * 1/height * height)}]}>{children}</Text>
  )
}

export default Txt