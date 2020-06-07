import React, { useState, useEffect } from 'react';
import './App.css';
import NavMenu from './components/NavMenu';

function App() {

  const [lat,setLat] = useState('')
  const [lon,setLon] = useState('')
  const [data,setData] = useState('')
  const [place,setPlace] = useState('')
  
  useEffect(() =>{  
          navigator.geolocation.watchPosition(function(position) {
          setLat(position.coords.latitude)
          setLon( position.coords.longitude)
      });          
  },[])

  useEffect(() => {
      fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=701662e260cebdf47507bde8173cfa8b`
        ).then(res => res.json())
        .then(result =>{
          setData(result.main)
          setPlace(result.name)
        }
      )
  },[lat,lon])

  return (
    <div className="App">
     <NavMenu val ={data} place = {place}/>
    </div>
  );
}

export default App;
