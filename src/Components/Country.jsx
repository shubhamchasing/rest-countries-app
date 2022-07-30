import { Link } from "react-router-dom";

const Country = (props) => {
  return (
    <Link
      to={`/${props.cca3}`}
      style={{
        width: "20%",
        padding: "2rem",
        margin: "1rem",
        boxShadow: "0px 0px 13px 0px rgba(0,0,0,0.75)",
        textDecoration: "none",
      }}
    >
      <img
        style={{ width: "100%" }}
        src={props.flags.png}
        alt={props.name.official}
      ></img>
      <p>{props.name.official}</p>
      <p>{`Population: ${props.population}`}</p>
      <p>{`Region: ${props.region}`}</p>
      <p>{`Capital: ${props.capital}`}</p>
    </Link>
  );
};

export default Country;
