import React, { Component } from "react";

import countries from "./countries.json";
import CountryList from "./Components/CountryList";
import Dropdown from "./Components/Dropdown";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { countries: countries, searchInput: "", selectedOption: "Select" };
  onChangeSelect = (value) => {
    this.setState({ selectedOption: value });
  };

  onChangeSearch = (value) => {
    this.setState({ searchInput: value });
  };

  render() {
    const filteredCountries = this.state.countries.reduce((acc, curr) => {
      if (this.state.selectedOption === "Select") {
        if (this.state.searchInput === "") {
          acc.push(curr);
        } else {
          if (
            curr.name.official
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase())
          ) {
            acc.push(curr);
          }
        }
      } else {
        if (curr.region === this.state.selectedOption) {
          if (this.state.searchInput === "") {
            acc.push(curr);
          } else {
            if (
              curr.name.official
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
            ) {
              acc.push(curr);
            }
          }
        }
      }
      return acc;
    }, []);

    const regions = this.state.countries.reduce(
      (acc, curr) => {
        if (!acc.includes(curr.region)) {
          acc.push(curr.region);
        }
        return acc;
      },
      ["Select"]
    );
    console.log(filteredCountries);
    return (
      <>
        <nav style={{ width: "100%", textAlign: "center" }}>
          <SearchBar
            onChangeSearch={this.onChangeSearch}
            searchInput={this.state.searchInput}
          />
          <Dropdown
            selectedOption={this.state.selectedOption}
            options={regions}
            onChangeSelect={this.onChangeSelect}
          />
        </nav>

        {filteredCountries.length === 0 ? (
          <p>No Countries Found</p>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </>
    );
  }
}

export default App;
