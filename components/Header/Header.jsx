import React from 'react'
import { s } from './Header.style'
import { View,Text, TouchableOpacity } from 'react-native'
import Txt from '../Txt/Txt'
import { useNavigation } from '@react-navigation/native'

function Header({city}) {
    const nav = useNavigation();
  return (
    <View style={s.container}>
        <TouchableOpacity  style={s.back_btn} onPress={nav.goBack}>
            <Txt>{"<"}</Txt>
        </TouchableOpacity>
        <View style={s.headertext}>
            <Txt>{city.toUpperCase()}</Txt>
            <Txt style={s.subtitle}>7 Day Forecast</Txt>
        </View>
        
    </View>
  )
}

export default Header