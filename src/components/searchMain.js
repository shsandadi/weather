import React, {useState} from 'react';
import '../components/style.css'
import WeatherDetails from './WeatherDetails';
function SearchMain() {
    const [searchTerm, setSearchTerm]=useState("mumbai");
    //Hooks we use in this project
    //useEffect
    //Async Functions
    //Promises
    //Try and Catch

    //useEffect
    //[searchTerm] the code in the flat arrow function will execute if any change happens in the searchTerm variable.
 //   [] In this we need to specify the value how many times we need to execute the function/code with in the function
 // [] if it is empty it will execute only when we load the page, it never execute after that
    useEffect(
        () =>{
//Code
        },[searchTerm]
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
