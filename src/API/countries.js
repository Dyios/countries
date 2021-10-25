export function getCountries(setState){
    fetch(`https://restcountries.com/v3.1/all`).then(
        response => response.json()
    ).then(data =>{setState(data)});
}
