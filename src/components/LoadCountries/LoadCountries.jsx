import React, { useEffect, useState } from 'react';
import Country from '../Countries/Country';
import './LoadCountries.css';

const LoadCountries = () => {
    const [countries,setCountries] = useState([]);
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h2>Total countries: {countries.length}</h2>
            <div className='card'>
            {
                countries.map(country => <Country props={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default LoadCountries;