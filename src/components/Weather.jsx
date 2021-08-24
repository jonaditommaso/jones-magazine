import React, {useEffect, useState} from 'react';
import { WEATHER_KEY } from '../utils/keys';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/weather.css'

const handleLocationError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation');
            break
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable');
            break
        case error.UNKNOWN_ERROR:
            alert('An unknown error ocurred');
            break
        default:
            alert('An unknown error ocurred');
    }
}


function Weather() {

    const [temperature, setTemperature] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [icon, setIcon] = useState('');
    
    useEffect(() => {
        
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( async (position) => {
                const {latitude, longitude} = position.coords
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`);
                setCity(data.name);
                setCountry(data.sys.country);
                setTemperature(data.main.temp);
                setIcon(data.weather[0].icon);
            },
             handleLocationError);      
            } 
    }, []);




    return (
        (temperature && city && country) 
        ?
        <div className="weather">
            <div className="weather__location">
                <i>{city}, {country}</i>
            </div>
            <div className="weather__temp">
                <img 
                    style={{width: '30px', height: '30px'}} 
                    src={`/assets/img/weather-icons/${icon}.png`} 
                    alt="weather"
                /> 
                <h5>{parseInt(temperature)} °C</h5>
            </div>
            
        </div>
        :
        <Spinner animation="border" variant="primary" />
    );
}

export default Weather;
