import React, { useState,useEffect } from 'react'
import { s } from './Clock.style'
import Txt from '../Txt/Txt'
import { View } from 'react-native'
import { nowToHHMM } from '../../utils/date-time'

function Clock() {

    const [time,setTime] = useState(nowToHHMM());
    useEffect(() => {
       const intervalid =  setInterval(() => {
            setTime(nowToHHMM())
        },1000)
        return () => {
            clearInterval(intervalid)
        }
    },[])
  return (
    <Txt>{nowToHHMM()}</Txt>
  )
}

export default Clock