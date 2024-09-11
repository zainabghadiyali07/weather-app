import React, {useState} from 'react'
import axios from 'axios'

function Weather() {
    const [city, setCity]= useState();
    const [weather, setWeather] = useState();
    const handleCityChange = (event) => {
        setCity(event.target.value)
    }  

    const fetchWeather = async () => {
        try{
             const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'28f7108efcaeb06fd0ca461550552901'}`)
             setWeather(response);
        }
        catch(error){
             console.log("Error fetching weather data", error)
        }
    }
    const handleClick = () => {
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input className='weather-input' type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange}/>
        <button className='btn' onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp}</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
};

export default Weather