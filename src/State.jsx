import { useEffect, useState } from "react";

export default function State({
  selectedCountry,
  selectedState,
  setSelectedState,
}) {
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (!selectedCountry) {
      setStates([]);
      setSelectedState("");
      return;
    }

    fetch(
      `https://location-selector.labs.crio.do/country=${selectedCountry}/states`
    )
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch(() => setStates([]));
  }, [selectedCountry, setSelectedState]);

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
