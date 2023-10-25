import axios from 'axios';

const updateCountries = (countries) => ({
  type: 'UPDATE_COUNTRIES',
  payload: countries,
});

const updateCountryData = (countryData) => ({
  type: 'UPDATE_COUNTRY_DATA',
  payload: countryData,
});

const fetchCountriesByContinent = (continent) => async (dispatch) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
    if (response.data && response.data.length > 0) {
      dispatch(updateCountries(response.data));
    } else {
      console.log('Valid information about continent were not retrieved by the API');
    }
  } catch (error) {
    console.log('Error to get the continent information: ', error);
  }
};
export { updateCountries, updateCountryData, fetchCountriesByContinent };
