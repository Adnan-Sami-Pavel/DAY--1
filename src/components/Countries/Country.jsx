import React from 'react';
import './Country.css';
const Country = (props) => {
    return (
        <div className='contents'>
           <p>Name: {props.props.name.common}</p>
           <p>Population: {props.props.population}</p>
        </div>
    );
};

export default Country;