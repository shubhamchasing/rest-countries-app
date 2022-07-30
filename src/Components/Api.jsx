import axios from "axios";

function getCountries() {
  return axios.get("https://restcountries.com/v3.1/all");
}

function getCountryDetails(code) {
  return axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
}

export { getCountries, getCountryDetails };
