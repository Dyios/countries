import React from 'react'
import "./details.css"
import BorderItem from './borderItem/BorderItem';
import { useParams } from 'react-router';

function Details({countries}) {
    const country = findCountryByName(useParams().country);
    console.log(country);
    // react router don't auto scroll to top
    window.scrollTo(0,0);
    // native name string generation & multiple names handle
    let nativeNames = Object.values(country.name.nativeName);
    let nativeName = nativeNames[0].common
    if (nativeNames.length > 1) {
        for (let i = 1; i < nativeNames.length; i++) {
            nativeName += `, ${nativeNames[i].common}`;
        }
    }

    // domain string
    let domains = Object.values(country.tld);
    let domain = domains.join(", ");

    // Currencie string generation & multiple currencies handle
    let currencies = Object.values(country.currencies);
    let currencie = currencies[0].name
    if (currencies.length > 1) {
        for (let i = 1; i < currencies.length; i++) {
            currencie += `, ${currencies[i].name}`;
        }
    }

    // Language string
    let languages = Object.values(country.languages);
    let language = languages.join(", ")

    function findCountryByName(countryName){
        let i = countries.findIndex(country => country.name.common === countryName);
        return countries[i];
    }

    // get country from it's code
    function getCountry(code){
        const i = countries.findIndex(country => country.cca2 === code || country.cca3 === code || country.ccn3 === code || country.cioc === code);
        return (countries[i]);
    }

    return (
        <div className="details-container">
            <div className="flag-container">
                <img className="detail-flag" src={country.flags.svg} alt={`${country.name.common} flag`} />
            </div>
            <div className="info-container">
                <p>{country.name.common}</p>
                <div className="details">
                    <div>
                        <p>Native Name: <span>{nativeName}</span></p>
                        <p>Population: <span>{new Intl.NumberFormat('en-EN').format(country.population)}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Sub Region: <span>{country.subregion}</span></p>
                        <p>Capital: <span>{country.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span>{domain}</span></p>
                        <p>Currencies: <span>{currencie}</span></p>
                        <p>Languages: <span>{language}</span></p>
                    </div>
                </div>
                <div className="border-countries-container">
                    <p>Border Countries: &nbsp;</p>
                    {
                        country.borders?.length > 0 ?
                        country.borders.map((country) =>{
                            return <BorderItem country={getCountry(country)} />
                        }):
                        <p className="no-borders">No country</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Details
