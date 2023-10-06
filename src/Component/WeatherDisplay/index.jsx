import React from 'react';
import './style.css'

function WeatherDisplay({data, unit, onChangeUnit}){
    const {main, weather, wind, name} = data;
  return(
    <div className='weather-display'>
       <h2>City Name: {name}</h2>
       <p>{weather.description}</p>
       <div>
        <span>
          Temparature: {main.temp} & {unit === 'metric'? 'Celsius' : 'Farhenheit'}
        </span>
        <button onClick={() =>{onChangeUnit(unit === 'metric'? 'imperial':'metric')}}>Toggele Unit</button>
       </div>
       <p>Humidity: {main.humidity}%</p>
       <p>WindSpeed: {wind.speed} m/s</p>
       {/* Adding an icon based on weather condition by using openWeatherMap icons */}
       {weather[0].icon && (
        <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt='Weather-icon'/>
       )}
    </div>
  )
}

export default WeatherDisplay;