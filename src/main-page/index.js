import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../custom-hooks/useHouses";
import useFeaturedHouse from "../custom-hooks/useFeaturedHouse";
import HousesContext from "../context/HousesContext";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header />
          <HouseFilter />
          <Routes>
            <Route
              path="/house/:id"
              element={<HouseFromQuery />}
            />
            <Route
              path="searchresults/:country"
              element={<SearchResults />}
            />
            <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HousesContext.Provider>
    </Router>
  );
}

export default App;
