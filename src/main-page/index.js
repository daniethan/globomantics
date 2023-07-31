import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../custom-hooks/useHouses";
import useFeaturedHouse from "../custom-hooks/useFeaturedHouse";

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className="container">
        <Header />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses} />}
          />
          <Route
            path="searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          />
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
