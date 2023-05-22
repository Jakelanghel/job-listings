import { StyledFilter } from "./StyledFilter";
import removeIcon from "../../../assets/icon-remove.svg";
import PropTypes from "prop-types";

const Filter = (props) => {
  const { filter, setFilters } = props;

  const handleClick = () => {
    setFilters((oldState) => {
      return oldState.filter((f) => f !== filter);
    });
  };

  return (
    <StyledFilter>
      <p className="filter">{filter}</p>

      <div className="container-remove" onClick={handleClick}>
        <img
          src={removeIcon}
          alt="remove filter"
          onClick={handleClick}
          id={`${filter}`}
        />
      </div>
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default Filter;
