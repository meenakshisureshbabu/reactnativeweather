import React from 'react'
import { s } from './MeteoBasic.style'
import { View,Image } from 'react-native'
import Txt from '../Txt/Txt'

function MeteoBasic({temperature,interpretation}) {
  return (
    <>
    <View style={s.clock}>
        <Txt>Clock</Txt>

    </View>
    <View style={s.city}>
        <Txt>Jersey City</Txt>

    </View>
    <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>

    </View>
    <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image style={{ height:100, width:100 }} source={interpretation.image}/>
    </View>
    </>
  )
}

export default MeteoBasic