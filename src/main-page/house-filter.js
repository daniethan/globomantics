import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HousesContext from "../context/HousesContext";

const HouseFilter = () => {
  const allHouses = useContext(HousesContext);
  const navigate = useNavigate();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((house) => house.country)))
    : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    //determine the country selected by extracting the current value
    const country = e.target.value;
    //instruct the router to display the search results page.
    !country ? navigate("/") : navigate(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in the country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
