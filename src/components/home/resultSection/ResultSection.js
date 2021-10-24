import React from 'react'
import "./resultSection.css"
import Country from './country/Country'

function ResultSection({countries}) {
    
    return (
        <div className="resultSection-countainer">
            {
                countries !== undefined && countries.map(country => <Country key={country.name.official} country={country} />)
            }
        </div>
    )
}

export default ResultSection
