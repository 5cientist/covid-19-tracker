import React from "react";
import { MenuItem, FormControl, Select,
} from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Scientist <span>🚀</span> </h1>
      <h1>COVID-19 TRACKER</h1>

      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">worldwide</MenuItem>
          <MenuItem value="worldwide">Option two</MenuItem>
          <MenuItem value="worldwide">option 3</MenuItem>
          <MenuItem value="worldwide">yo yo yo</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
