import React from 'react'
import { s } from './MeteoAdvanced.style'
import { View,Text } from 'react-native'
import Txt from '../Txt/Txt'
import { StyledContainer } from './MeteoAdvanced.style'
import { StyledLabel,StyledValue } from './MeteoAdvanced.style'

function MeteoAdvanced({sunrise,sunset,windspeed}) {
  return (
    <View style={s.footer}>
    <StyledContainer style={s.text1}><StyledValue>{sunrise}</StyledValue><StyledLabel>Sunrise</StyledLabel></StyledContainer>
    <StyledContainer style={s.text2}><StyledValue>{sunset}</StyledValue><StyledLabel>Sunset</StyledLabel></StyledContainer>
    <StyledContainer styel={s.text3}><StyledValue>{windspeed} km/h</StyledValue><StyledLabel>WindSpeed</StyledLabel></StyledContainer>
    </View>
  )
}

export default MeteoAdvanced