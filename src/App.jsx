import data from "./data.json";
import GlobalStyles from "./shared/Global";
import Header from "./components/header/Header";
import Listing from "./components/listing/Listing";

function App() {
  const listings = data.map((job, i) => {
    return <Listing key={i} data={job} />;
  });
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="container-listings">{listings}</div>
    </>
  );
}

export default App;
