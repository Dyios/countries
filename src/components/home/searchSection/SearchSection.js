import React from 'react'
import "./searchSection.css"

function SearchSection({children}) {
    return (
        <div className="searchSection-container">
            {children}
        </div>
    )
}

export default SearchSection
