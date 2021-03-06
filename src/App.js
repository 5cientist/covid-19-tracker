import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  //STATE is how to write a variable in REACT <<<<<<<
  //USEEFFECT which run a pices of code based on given condition
  //https://disease.sh/v3/covid-19/countries // use for api


  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data => {
      setCountryInfo(data);
    }))

  },[])



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
          setTableData(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    console.log("yo yo yo ", countryCode);

    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
        .then(response => response.json())
        .then(data => {
          setCountry(countryCode);
          // all of the data 
          //from the country
          setCountryInfo(data);

        });
  };

  console.log("country info >>", countryInfo);

 

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          {/* <h1>Scientist hanshir lukku <span>🚀</span></h1> */}
          <h1> COVID-19 TRACKER </h1>

          {/* i want loops to  countries
    and show the drop 
    for that we use state 
*/}

          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
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

        <div className="app__stats">
          <InfoBox title="Coronavirus Causes" cases={countryInfo.todayCases} total={countryInfo.cases} />

          <InfoBox title="Recoverd" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />

          <InfoBox title="Death" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
          {/* infoBox for recovery
        infoBox for death
        infoBox for recovery */}
        </div>

        <Map />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live causes by the Country</h3>
          <Table countries={tableData} />

          <h3>World wide causes</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
