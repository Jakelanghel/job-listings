import { useState } from "react";
import GlobalStyles from "./components/shared/Global";
import Header from "./components/header/Header";
import { createListings } from "./util/createListings";
import { ContainerListings } from "./components/listing/ContainerListings.Styled";
import ActiveFilters from "./components/active-filters/ActiveFilters";

function App() {
  const [filters, setFilters] = useState([]);

  const listingElements = createListings(filters, setFilters);

  const renderActiveFilters =
    filters.length > 0 ? (
      <ActiveFilters filtersArr={filters} setFilters={setFilters} />
    ) : null;

  return (
    <>
      <GlobalStyles />
      <Header />
      {renderActiveFilters}
      <ContainerListings filters={filters.length} role="main">
        {listingElements}
      </ContainerListings>
    </>
  );
}

export default App;
