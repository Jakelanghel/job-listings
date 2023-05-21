import { useState } from "react";
import GlobalStyles from "./components/shared/Global";
import Header from "./components/header/Header";
import { createListings } from "./util/createListings";
import { ContainerListings } from "./components/listing/ContainerListings.Styled";
import ActiveFilters from "./components/active-filters/ActiveFilters";

function App() {
  const [filters, setFilters] = useState([]);
  // Create and array of job listing elements
  const listingElements = createListings(filters, setFilters);
  console.log(filters.length);
  return (
    <>
      <GlobalStyles />
      <Header />
      {filters.length > 0 ? (
        <ActiveFilters filtersArr={filters} setFilters={setFilters} />
      ) : null}
      <ContainerListings filters={filters.length}>
        {listingElements}
      </ContainerListings>
    </>
  );
}

export default App;
