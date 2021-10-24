import React, { useEffect, useState } from 'react'
import "./home.css"

import SearchSection from './searchSection/SearchSection'
import Search from './searchSection/search/Search'
import Filter from './searchSection/filter/Filter'
import ResultSection from './resultSection/ResultSection'

function Home({data}) {
    const [countries, setCountries] = useState(data);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("");

    // find countries with their name & region
    useEffect(() => {
        // filter by name
        let processedData = search !== "" ?
            data.filter((country) => country.name.common.toLowerCase().includes(search?.toLowerCase())) :
            data;

        //filter by region
        processedData = region !== "" ?
            processedData.filter(country=> country.region === region) :
            processedData;

        setCountries(processedData)
    }, [search, region, data])

    return (
        <div className="body-container">
            <SearchSection >
                <Search state={search} setState={setSearch} />
                <Filter state={region} setState={setRegion} />
            </SearchSection>
            <ResultSection countries={countries} />
        </div>
    )
}

export default Home
