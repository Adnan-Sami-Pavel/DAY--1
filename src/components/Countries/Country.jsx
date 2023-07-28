import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <div className='contents'>  
            <div>
                <img src={props.props.flags.svg} alt="" srcset="" />
            </div>
            <div>
                <p>Name: {props.props.name.common}</p>
                <p>Population: {props.props.population}</p>
                <p>Area: {props.props.area}</p>
            </div>
        </div>
    );
};

export default Country;