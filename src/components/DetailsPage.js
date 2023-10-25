import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/DetailsPage.css';

const DetailsPage = () => {
  const countryData = useSelector((state) => state.countries.countryData);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  const {
    name, capital, population, region, languages,
    area, flags, currencies,
  } = countryData;

  const commonName = name?.common ?? 'N/A';
  const capitalName = capital?.[0] ?? 'N/A';
  const populationCount = population ?? 'N/A';
  const regionName = region ?? 'N/A';
  const languageNames = languages ? Object.values(languages).join(', ') : 'N/A';
  const areaSize = area ?? 'N/A';
  const countryFlag = flags?.[0] ?? '';
  const countryCurrency = currencies ? Object.keys(currencies).join(', ') : 'N/A';

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>
          {commonName}
        </h1>
        <img src={countryFlag} alt={`${commonName} Flag`} />
        <p>
          Capital:
          {capitalName}
        </p>
        <p>
          Population:
          {populationCount}
        </p>
        <p>
          Area:
          {areaSize}
        </p>
        <p>
          Region:
          {regionName}
        </p>
        <p>
          Languages:
          {languageNames}
        </p>
        <p>
          Currency:
          {countryCurrency}
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
