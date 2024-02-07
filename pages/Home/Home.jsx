import React from 'react'
import { Text,View } from 'react-native'
import { s } from './Home.style'
import Txt from '../../components/Txt/Txt'
import MeteoBasic from '../../components/MeteoBasic/MeteoBasic'
import { getWeatherInterpretation } from '../../utils/meteo-utils'
import MeteoAdvanced from '../../components/MeteoAdvanced/MeteoAdvanced'
import SearchBar from '../../components/SearchBar/SearchBar'

function Home({weatherdata,city,onSubmitSearch}) {
    const currentWeather = weatherdata.current_weather;
    const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode)
  return (
    <>
    <View style={s.m_basic}><MeteoBasic dailyWeather={weatherdata.daily} temperature={Math.round(currentWeather.temperature)} interpretation={currentInterpretation} city={city}/></View>
    <View style={s.searchbar_container}><SearchBar onSubmit={onSubmitSearch}/></View>
    <View style={s.m_advanced}><MeteoAdvanced sunrise={weatherdata.daily.sunrise[0].split("T")[1]} sunset={weatherdata.daily.sunset[0].split("T")[1]} windspeed={currentWeather.windspeed}/></View>
    </>
  )
}

export default Home