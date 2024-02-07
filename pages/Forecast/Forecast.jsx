import React from 'react'
import { s } from './Forecast.style'
import { View,Text } from 'react-native'
import Txt from '../../components/Txt/Txt'
import { useRoute } from '@react-navigation/native'
import Header from '../../components/Header/Header'
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem'
import { DAYS, getWeatherInterpretation } from '../../utils/meteo-utils'

function Forecast() {
const {params} = useRoute();
const forecastlist = (
    <View style={{marginTop:50}}>
        {
            params.time.map((time,index) => {
                const weathercode = params.weathercode[index]
                const interpretation  = getWeatherInterpretation(weathercode).image;
                const temperature = params.temperature_2m_max[index]
                const date = new Date(time)
                const day = DAYS[date.getDay()]
                const formatteddate = date.toLocaleDateString("default",{
                    day:"numeric",
                    month:"numeric"
                })
                return(
                    <ForecastListItem 
                    key={time}
                    image={interpretation}
                    temperature={temperature.toFixed(0)}
                    day={day}
                    date={formatteddate}
                    />
                )
            })
        }
    </View>
)
  return (
   <>
   <Header city={params.city}/>
   {forecastlist}
   
   </>
  )
}

export default Forecast