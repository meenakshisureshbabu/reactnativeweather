import React from 'react'
import { Text,View } from 'react-native'
import { s } from './Home.style'
import Txt from '../../components/Txt/Txt'
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic'
import { getWeatherInterpretation } from '../../utils/meteo-utils'

function Home({weatherdata}) {

    const currentWeather = weatherdata.data.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode)
  return (
    <>
    <View style={s.m_basic}><MeteoBasic temperature={Math.round(currentWeather.temperature)} interpretation={currentInterpretation}/></View>
    <View style={s.searchbar_container}><Txt>Search</Txt></View>
    <View style={s.m_advanced}><Txt>Advanced Weather Info</Txt></View>
    </>
  )
}

export default Home