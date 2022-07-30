import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getCountryDetails } from "./Api";

class CountryDetails extends Component {
  state = { country: {} };

  componentDidMount() {
    const code = this.props.match.params.cca3;

    getCountryDetails(code).then((res) => {
      this.setState({ country: res.data[0] });
    });
  }
  

  componentDidUpdate(){
    const newCode = this.props.match.params.cca3
    getCountryDetails(newCode).then((res)=>{
        this.setState({country: res.data[0]})
    })
  }

  render() {
    if (Object.keys(this.state.country).length !== 0) {
      const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        borders,
      } = this.state.country;

      return (
        <div>
          <div>
            <Link to={"/"}>
              <button>Back</button>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                style={{ width: "100%" }}
                src={flags.png}
                alt={name.official}
              ></img>
            </div>
            <div>
              <h3>{name.official}</h3>
              <ul>
                <li>{population}</li>
                <li>{region}</li>
                <li>{subregion}</li>
                <li>{capital}</li>
                <li>{tld}</li>
                {borders !== undefined ? borders.map((a) => {
                   
                 return <Link key= {a} to={`/${a}`}> <button >{a}</button></Link>
                }) : ""}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CountryDetails;
