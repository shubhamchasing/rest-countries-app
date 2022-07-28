import Country from "./Country";

const CountryList = (props) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {props.countries.map((country, index) => {
        return <Country key={index} {...country} />;
      })}
    </div>
  );
};

export default CountryList;
