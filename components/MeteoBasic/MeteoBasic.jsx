import React from "react";
import { s } from "./MeteoBasic.style";
import { View, Image, TouchableOpacity } from "react-native";
import Txt from "../Txt/Txt";
import Clock from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

function MeteoBasic({ temperature, interpretation, city, dailyWeather }) {

  const nav = useNavigation()
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <TouchableOpacity onPress={() => nav.navigate("Forecast",{city,...dailyWeather})}>
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
          <Image
            style={{ height: 100, width: 100 }}
            source={interpretation.image}
          />
        
      </View>
    </>
  );
}

export default MeteoBasic;
