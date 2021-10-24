import React from 'react'
import "./country.css"
import { useHistory } from "react-router-dom"

function Country({country}) {
    let history = useHistory();

    function handleClick(){
        history.push(`country/${country.name.common}`,{country: country})
    }

    return (
        <div className="country-container" onClick={handleClick}>
            <img className="flag" src={country.flags.png} alt={`${country.name.common} flag`} />
            <div className="country-infos">
                <p className="name">{country.name.common}</p>
                <p className="info">Population: <span>{new Intl.NumberFormat('en-EN').format(country.population)}</span></p>
                <p className="info">Region: <span>{country.region}</span></p>
                <p className="info">Capital: <span>{country.capital}</span></p>
            </div>
        </div>
    )
}

export default Country
