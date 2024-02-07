import React from 'react'
import { s } from './ForecastListItems.style'
import { Text,View,Image } from 'react-native'
import Txt from '../Txt/Txt'

function ForecastListItem({image,date,day,temperature}) {
  return (
    <View style={s.container}>
      <Image style={s.weatherimage} source = {image}/>
      <Txt style={s.date}>{date}</Txt> 
      <Txt style={s.day}>{day}</Txt> 
      <Txt style={s.temperature}>{temperature}°</Txt>  
    </View>
  )
}

export default ForecastListItem