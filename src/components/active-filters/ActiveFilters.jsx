import { StyledActiveFilters } from "./ActiveFilters.Styled";
import Filter from "./filter/Filter";
import PropTypes from "prop-types";

const ActiveFilters = (props) => {
  const { filtersArr, setFilters } = props;

  const clearAllFilters = () => {
    setFilters([]);
  };

  const filters = filtersArr.map((filter, i) => {
    return <Filter key={i} filter={filter} setFilters={setFilters} />;
  });
  return (
    <StyledActiveFilters>
      <div className="container-filters">{filters}</div>
      <button onClick={clearAllFilters}>clear</button>
    </StyledActiveFilters>
  );
};

ActiveFilters.propTypes = {
  filtersArr: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default ActiveFilters;
