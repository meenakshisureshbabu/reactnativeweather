import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import Home from "./pages/Home/Home";
import backgroundimage from "../weatherapp/assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Forecast from "./pages/Forecast/Forecast";
import { Alert } from "react-native";
const Stack = createNativeStackNavigator();
const navTheme = {
  colors:{
    background:"transparent"
  }
}
export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weatherdata, setWeatherdata] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherfromCoords(coordinates);
      fetchcitybyCoords(coordinates);
    }
  }, [coordinates]);

  async function fetchWeatherfromCoords(coordinates) {
    try {
      const weatherresponse = await MeteoAPI.fetchweatherbyCoords(coordinates);
      //console.log(weatherresponse)
      setWeatherdata(weatherresponse);
    } catch (err) {
      setWeatherdata(err);
    }
  }

  async function fetchcitybyCoords(coordinates) {
    try {
      const city = await MeteoAPI.fetchcitybyCoords(coordinates);
      //console.log(weatherresponse)
      setCity(city);
    } catch (err) {
      setWeatherdata(err);
    }
  }
  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchCoordsByCity(city) {
    try {
      const coordsresult = await MeteoAPI.fetchCoords(city);
      //console.log(weatherresponse)
      setCoordinates(coordsresult);
    } catch (err) {
      Alert.alert("Sorry!!",err);
    }
  }
 
  //https://geocoding-api.open-meteo.com/v1/search?name=New+York&count=1&language=en&format=json
  //console.log(coordinates)
  //console.log(weatherdata)
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        imageStyle={s.img}
        style={s.backimage}
        source={backgroundimage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weatherdata && (
             <Stack.Navigator screenOptions={{headerShown:false,animation:"fade"}} initialRouteName="Home">
              <Stack.Screen name="Home">
               {() => <Home weatherdata={weatherdata} city={city} onSubmitSearch={fetchCoordsByCity}/>}
              </Stack.Screen>
              <Stack.Screen name="Forecast" component={Forecast}/>
             </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
