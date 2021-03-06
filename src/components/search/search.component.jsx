import React from 'react';
import './search.styles.css';

export const Search = ({placeholder, handleChange}) => (
    <div>
        <input type="search"  
            className="search"
            placeholder={placeholder}
            onChange={handleChange}
        /> 
    </div>
)