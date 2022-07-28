const Dropdown = ({ options, onChangeSelect, selectedOption }) => {
  return (
    <select
      value={selectedOption}
      onChange={(event) => onChangeSelect(event.target.value)}
    >
      {[...options].map((eachItem) => (
        <option key={eachItem} value={eachItem}>
          {eachItem}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
