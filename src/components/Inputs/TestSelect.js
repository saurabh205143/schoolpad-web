import React, { useState, useEffect } from 'react';


// Test data
const planets = [];
const countries = [];
const cities = [];
for (let i = 0; i < 6; i++) {
  planets.push({ id: `planet-${i}`, name: `planet-${i}` });
}
planets.forEach((item) => {
  for (let i = 0; i < 3; i++) {
    countries.push({
      id: `${item.id}-country-${i}`,
      name: `${item.id}-country-${i}`,
      planet: item.id,
    });
  }
});
countries.forEach((item) => {
  for (let i = 0; i < 3; i++) {
    cities.push({
      id: `${item.id}-city-${i}`,
      name: `${item.id}-city-${i}`,
      country: item.id,
    });
  }
});
const record = {
  planet: planets[0].id,
  country: countries[0].id,
  city: cities[0].id,
};

// Selects component
export const SelectList = ({ record, onSave, planets, countries, cities }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(record.planet);
  const [selectedCountry, setSelectedCountry] = useState(record.country);
  const [selectedCity, setSelectedCity] = useState(record.city);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    const filteredCountries = countries.filter((c) => c.planet === selectedPlanet);
    setFilteredCountries(filteredCountries);
    setSelectedCountry(filteredCountries[0].id);
  }, [selectedPlanet]);

  useEffect(() => {
    const filteredCities = cities.filter((c) => c.country === selectedCountry);
    setFilteredCities(filteredCities);
    setSelectedCity(filteredCities[0].id);
  }, [selectedCountry]);

  return (
    <div>
      <select
        value={selectedPlanet}
        onChange={(e) => setSelectedPlanet(e.target.value)}
      >
        {planets.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {filteredCountries.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {filteredCities.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <button
        onClick={() =>
          onSave({
            planet: selectedPlanet,
            country: selectedCountry,
            city: selectedCity,
          })
        }
      >
        Save
      </button>
    </div>
  );
};

export default function TestSelect() {
  const [saved, setSaved] = useState(null);

  return (
    <div>
      <SelectList
        record={record}
        onSave={(savedObj) => setSaved(savedObj)}
        planets={planets}
        countries={countries}
        cities={cities}
      />
      {saved ? (
        <div>
          {saved?.planet && <p>{`Saved planet: ${saved.planet}`}</p>}
          {saved?.country && <p>{`Saved country: ${saved.country}`}</p>}
          {saved?.city && <p>{`Saved city: ${saved.city}`}</p>}
        </div>
      ) : (
        <p>No saved result yet</p>
      )}
    </div>
  );
}