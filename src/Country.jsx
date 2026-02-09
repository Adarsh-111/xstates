import { useEffect, useState } from "react";

function Country({ selectedCountry, setSelectedCountry }) {
  const [countries, setCountries] = useState([]);

  // Fetch countries when component loads
  useEffect(() => {
    fetch("https://location-selector.labs.crio.do/countries")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Country API failed");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        // Graceful fallback for API failure (required by Cypress)
        setCountries([]);
      });
  }, []);

  return (
    <select
      value={selectedCountry}
      onChange={(e) => setSelectedCountry(e.target.value)}
    >
      <option value="">Select Country</option>

      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

export default Country;
