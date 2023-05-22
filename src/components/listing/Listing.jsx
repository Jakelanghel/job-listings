import PropTypes from "prop-types";
import { StyledListing } from "./Listing.Styled";

const Listing = (props) => {
  const { data, setFilters, filters } = props;

  const tagsArr = [data.role, data.level, ...data.languages, ...data.tools];

  const handleClick = (e) => {
    const selectedFilter = e.target.textContent;
    if (!filters.includes(selectedFilter)) {
      setFilters((oldState) => [...oldState, selectedFilter]);
    }
  };

  const tagElements = tagsArr.map((tag, i) => (
    <p key={i} className="tag" onClick={handleClick}>
      {tag}
    </p>
  ));

  const classname = data.featured ? "featured-listing" : null;

  const renderNew = data.new ? <p className="new">new!</p> : null;

  const renderFeatured = data.featured ? (
    <p className="featured">featured</p>
  ) : null;

  return (
    <StyledListing className={classname}>
      <div className="container-listing-details">
        <div className="container-logo">
          <img src={data.logo} alt="logo" className="logo" />
        </div>
        <div className="container-details">
          <div className="container-company">
            <p className="company">{data.company}</p>
            {renderNew}
            {renderFeatured}
          </div>
          <div className="container-position">
            <p className="position">{data.position}</p>
          </div>
          <div className="container-post-details">
            <p className="p-detail">{data.postedAt}</p>
            <p className="p-detail dot">{data.contract}</p>
            <p className="p-detail dot">{data.location}</p>
          </div>
        </div>
      </div>

      <div className="container-tags">{tagElements}</div>
    </StyledListing>
  );
};

Listing.propTypes = {
  data: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default Listing;
