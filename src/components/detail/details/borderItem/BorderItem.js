import React from 'react'
import { useHistory } from 'react-router-dom'

function BorderItem({country}) {
    let history = useHistory()

    function handleClick(){
        history.push(`/${country.name.common}`,{country: country})
    }
    
    return (
        <>
            <button key={country.cioc} className="border-contry" onClick={handleClick}>{country.name.common}</button>
        </>
    )
}

export default BorderItem
