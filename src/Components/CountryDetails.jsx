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

  componentDidUpdate(prevProps) {
    //console.log('prevProps:' ,prevProps.match.params.cca3)
    //console.log('new:', this.props.match.params.cca3)
    if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
      const newCode = this.props.match.params.cca3;
      getCountryDetails(newCode).then((res) => {
        this.setState({ country: res.data[0] });
      });
    }
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
              <h3>{`${name.official}`}</h3>
              <ul>
                {population && <p>{`Population: ${population}`}</p>}
                {region && <p>{`Region: ${region}`}</p>}
                {subregion && <p>{`Subregion: ${subregion}`}</p>}
                {capital && <p>{`Capital: ${capital}`}</p>}
                {tld && <p>{`Domain: ${tld}`}</p>}
                {"Border Countries:"}{" "}
                {borders !== undefined
                  ? borders.map((a) => {
                      return (
                        <Link key={a} to={`/${a}`}>
                          <button>{a}</button>
                        </Link>
                      );
                    })
                  : "None"}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CountryDetails;
