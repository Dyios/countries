import React from 'react'
import { useHistory } from 'react-router'
import "./detail.css"
import Details from "./details/Details"

function Detail({data, country}) {
    let history = useHistory();

    return (
        <div className="detail-container">
            <div className="back" onClick={()=>history.goBack()}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" className="back-icon svg-inline--fa fa-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"></path></svg>
                <p>Back</p>
            </div>
            <Details countries={data} country={country} />
        </div>
    )
}

export default Detail
