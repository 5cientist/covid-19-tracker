import React,{useState}  from "react";
import { MenuItem, FormControl, Select,
} from "@material-ui/core";
import "./App.css";

function App() {
  const [countries,setCountries] = useState(["USA","IN","UK"]);


  //STATE is how to write a variable in REACT <<<<<<<
  //USEEFFECT which run a pices of code based on given condition
  return (
    <div className="app">
      <div className="app__header">
      {/* <h1>Scientist <span>🚀</span></h1> */}
      <h1> COVID-19 TRACKER </h1>

{/* i want loops to  countries
    and show the drop 
    for that we use state 
*/}




       <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          {
           countries.map(country => (
           <MenuItem value={country}>{country}</MenuItem>
           ) )
          }
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
