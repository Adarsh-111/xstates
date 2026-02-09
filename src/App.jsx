import { useState } from "react";
import Country from "./Country";
import State from "./State";
import City from "./City";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h2>XStates Location Selector</h2>

      <Country
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />

      <br /><br />

      <State
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />

      <br /><br />

      <City
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      <br /><br />

      {selectedCity && (
        <h3>
          You selected {selectedCity}, {selectedState}, {selectedCountry}
        </h3>
      )}
    </div>
  );
}

export default App;
