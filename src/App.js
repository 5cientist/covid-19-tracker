import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  //STATE is how to write a variable in REACT <<<<<<<
  //USEEFFECT which run a pices of code based on given condition
  //https://disease.sh/v3/covid-19/countries // use for api

  useEffect(() => {
    // code inside here will run Onces
    //when the component loads and not again
    // async => send ,wait for request

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // united states , India ,...
            value: country.countryInfo.iso2, // Us ,In ,Uk ...
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async(event) => {
    const countryCode = event.target.value;
    console.log("yo yo yo ",countryCode);

    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app__header">
        {/* <h1>Scientist hanshir lukku <span>🚀</span></h1> */}
        <h1> COVID-19 TRACKER </h1>

        {/* i want loops to  countries
    and show the drop 
    for that we use state 
*/}

        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">Option two</MenuItem>
          <MenuItem value="worldwide">option 3</MenuItem>
          <MenuItem value="worldwide">yo yo yo</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
