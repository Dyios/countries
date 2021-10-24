import React, { useState } from 'react'
import "./filter.css"

function Filter({state, setState}) {
    const [showOptions, setShowOptions] = useState(false);

    function handleRegionChange(region){
        setState(oldState => oldState === region ? "" : region)
        setShowOptions(false);
    }

    return (
        <div className="filter-container">
            <div className="selection" onClick={()=>setShowOptions(oldState => !oldState)}>
                <p className="filter-placeholder">{state !== "" ? state : "Filter by Region"}</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="arrow-icon svg-inline--fa fa-angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg>
            </div>
            {
                showOptions && (
                    <div className="filter-options">
                        <div onClick={()=>handleRegionChange("Africa")}>Africa</div>
                        <div onClick={()=>handleRegionChange("Americas")}>Americas</div>
                        <div onClick={()=>handleRegionChange("Asia")}>Asia</div>
                        <div onClick={()=>handleRegionChange("Europe")}>Europe</div>
                        <div onClick={()=>handleRegionChange("Oceania")}>Oceania</div>
                    </div>
                )
            }
        </div>
    )
}

export default Filter
