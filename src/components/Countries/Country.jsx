import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const {name,flags,population,area} = props.country;
   
    return (
        <div className='contents'>  
            <div>
                <img src={flags.svg} alt="" srcset="" />
            </div>
            <div>
                <p>Name: {name.common}</p>
                <p>Population: {population}</p>
                <p>Area: {area} km</p>
            </div>
        </div>
    );
};

export default Country;