import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { s } from './App.style';
import Home from './pages/Home/Home';
import backgroundimage from '../weatherapp/assets/background.png'
import { useEffect, useState } from 'react';
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import { MeteoAPI } from './api/meteo';
import {useFonts} from 'expo-font'
export default function App() {

  const [coordinates,setCoordinates] = useState()
  const [weatherdata,setWeatherdata] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular":require("./fonts/Alata-Regular.ttf")
  })

  useEffect(() => {
    getUserCoordinates()
  },[])

  useEffect(() => {
    if(coordinates){
      fetchWeatherfromCoords(coordinates);
    }
  },[coordinates])


  async function fetchWeatherfromCoords(coordinates){
    try{
      const weatherresponse = await MeteoAPI.fetchweatherbyCoords(coordinates)
      setWeatherdata(weatherresponse)
    }
    catch(err){
      setWeatherdata(err)
    }
  }
  async function getUserCoordinates(){
    const {status} = await requestForegroundPermissionsAsync()
    if(status === 'granted'){
      const location = await getCurrentPositionAsync()
      setCoordinates({lat: location.coords.latitude,lng:location.coords.longitude})
    }
    else{
      setCoordinates({lat:"48.85",lng:"2.35"})
    }
  }
  //console.log(coordinates)
  //console.log(weatherdata)
  return (
    <ImageBackground imageStyle={s.img} style = {s.backimage} source={backgroundimage}>
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {isFontLoaded && weatherdata && <Home weatherdata={weatherdata}/>}
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}


