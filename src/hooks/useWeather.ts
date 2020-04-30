import { useState } from 'react';
import axios from 'axios'

export function useWeather (){

  const [temp,setTemp] = useState(0);
  const [weather, setWeather] = useState('Rainy');

  const getWeather = (city: string) => {

    const api = '';
    const call = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api + "&units=imperial";
    return axios({
      url: call,
      method: 'GET'
    }).then(response =>{
      console.log(response);
      setTemp(response.data.main.temp)
      setWeather(response.data.weather[0].main);
      return response.data
    });
  };
  return {
    getWeather,
    temp,
    weather
  }
}
