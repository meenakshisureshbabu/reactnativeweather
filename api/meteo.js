import axios from "axios"

export class MeteoAPI{
    static async fetchweatherbyCoords(coords) {
        return (await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`)).data;
    }
    static async fetchcitybyCoords(coords) {
        const {address:{city,village,town}} = (await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`)).data;
        return city || village || town;
    }

    static async fetchCoords(city){
        try{
            const {latitude:lat,longitude:lng} = (await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`)).data.results[0];
            return {lat :lat,lng: lng}
        }
        catch(err){
            throw "Invalid City Name"
        }
    }
}


