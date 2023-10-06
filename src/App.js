import React,{useState} from 'react';
import SearchForm from './Component/SearchForm';
import WeatherDisplay from './Component/WeatherDisplay';
import './App.css';
//79f2cb891e0a078b105841d79a84d2b1
function App() {
    const [unit, setUnit] = useState('metric');
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const apiKey = '79f2cb891e0a078b105841d79a84d2b1';

    const handleSearch = async() =>{
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
        const data = await response.json();
  
        if(response.ok){
          setWeatherData(data);
          setError(null);
        }else{
          setError(data.message);
          setWeatherData(null);
        }
      }  catch(error){
         console.log('The API is broken', error);
         setError('This is a fackata API');
         setWeatherData(null);
    }
  }
  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchForm
        city = {city}
        setCity = {setCity}
        onSearch = {handleSearch}
      />
      {error && <p className='error'>{error}</p>}
      <WeatherDisplay
        data = {weatherData}
        unit = {unit}
        onChangeUnit = {(newUnit)=>{ setUnit(newUnit)}}
      />
    </div>
  );
}

export default App;
