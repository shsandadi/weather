import React, {useEffect,useState} from 'react';
import '../components/style.css'
import WeatherDetails from './WeatherDetails';
function SearchMain() {
    const [searchTerm, setSearchTerm]=useState("mumbai");
    //Hooks we use in this project
    //useEffect
    //Async Functions
    //Promises
    //Try and Catch
    const getWeatherInfo =async  () =>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=0c49e4913229db4b96122bd473a874a0`;
let res=await fetch(url);
let data=await res.json();
console.log(data);
}catch(error){
    console.log(error);
}
    }
    
    
    useEffect(
        () =>{
            getWeatherInfo();
        },[]
    )
    return (
        <>
       <div className="wrap">
           <div className="search">
               <input type="search" placeholder="Search city.." id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
           </div>
        <button className="searchButton" onClick={getWeatherInfo}>Search</button>
           
       </div>
       <WeatherDetails />
       </>
    )
}

export default SearchMain;
