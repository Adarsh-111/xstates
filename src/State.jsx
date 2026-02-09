import { useEffect, useState } from "react";

function State({ selectedCountry, selectedState, setSelectedState }) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (!selectedCountry) return;

    fetch(
      `https://location-selector.labs.crio.do/country=${selectedCountry}/states`
    )
      .then((res) => res.json())
      .then((data) => setStates(data));

    setSelectedState("");
  }, [selectedCountry]);

  return (
    <select
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      disabled={!selectedCountry}
    >
      <option value="">Select State</option>

      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}

export default State;
