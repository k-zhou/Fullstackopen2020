import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableCreator from './TableCreator'

const WeatherCall = ({cityname, apikey}) => {

  /* Using OpenWeatherMap's API and its accursed piecewise constructed JSON responses */
  /*
    https://openweathermap.org/api
  */
  const wdat_weather = useState( {} )
  const wdat_main = useState( {} )
  const wdat_wind = useState( {} )
  const wdat_sys = useState( {} )

  useEffect( () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`)
      .then( resp => {
        // console.log("received weather data:", resp)
        const r = resp.data
        wdat_weather[1](r.weather[0])
        wdat_main[1](r.main)
        wdat_wind[1](r.wind)
        wdat_sys[1](r.sys)
      })
      .catch(error => {
        console.log("failed to receive weather data:", cityname, error)
      })
  // const r = require('./example-weather.json') // DEBUG

  }, [])

  // console.log("weather", wdat_weather[0].description)
  // console.log("main", wdat_main[0].temp)
  // console.log("wind", wdat_wind[0].speed)
  // console.log("sys", wdat_sys[0].sunrise)

  /* Constructs the table display */
  const output = [
    [''           , wdat_weather[0].description],
    ['temperature', `${wdat_main[0].temp -273.15} Celsius`],
    ['wind'       , `${wdat_wind[0].speed} m/s, direction from ${wdat_wind[0].deg} deg`],
    ['pressure'   , `${wdat_main[0].pressure} hPa`]
  ]

  return (
    <div>
      <h2>Weather</h2>
      <TableCreator rows={output} />
    </div>
  )
}

export default WeatherCall
