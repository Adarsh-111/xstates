import { useEffect, useState } from "react";

function City({
  selectedCountry,
  selectedState,
  selectedCity,
  setSelectedCity,
}) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (!selectedState) return;

    fetch(
      `https://location-selector.labs.crio.do/country=${selectedCountry}/state=${selectedState}/cities`
    )
      .then((res) => res.json())
      .then((data) => setCities(data));

    setSelectedCity("");
  }, [selectedState, selectedCountry]);

  return (
    <select
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      disabled={!selectedState}
    >
      <option value="">Select City</option>

      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}

export default City;
