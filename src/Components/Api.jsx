import axios from "axios";

function getCountries() {
  return axios.get("https://restcountries.com/v3.1/independent?status=true");
}

function getCountryDetails(code) {
  return axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
}

export { getCountries, getCountryDetails };
