import { StyledFilter } from "./StyledFilter";
import removeIcon from "../../../assets/icon-remove.svg";
import PropTypes from "prop-types";

const Filter = (props) => {
  const { filter, setFilters } = props;

  const handleClick = (e) => {
    const selected = e.target.id;
    setFilters((oldState) => {
      return oldState.filter((filter) => filter !== selected);
    });
  };

  return (
    <StyledFilter>
      <p className="filter">{filter}</p>

      <div className="container-remove" onClick={handleClick} id={`${filter}`}>
        <img src={removeIcon} alt="remove filter" />
      </div>
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default Filter;
