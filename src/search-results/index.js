import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  const filteredHouses = allHouses.filter((house) => house.country === country);

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((house) => (
            <SearchResultsRow key={house.id} house={house} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
