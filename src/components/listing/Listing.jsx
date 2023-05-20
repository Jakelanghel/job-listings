import React from "react";
import PropTypes from "prop-types";
import { StyledListing } from "./Listing.Styled";

const Listing = (props) => {
  const { data } = props;

  const tagsArr = [data.role, data.level, ...data.languages, ...data.tools];

  const tagElements = tagsArr.map((tag, i) => (
    <p key={i} className="tag">
      {tag}
    </p>
  ));

  return (
    <StyledListing>
      <div className="container-listing-details">
        <div className="container-logo">
          <img src={data.logo} alt="logo" className="logo" />
        </div>
        <div className="container-details">
          <div className="container-company">
            <p className="company">{data.company}</p>
            {data.new ? <p className="new">new!</p> : null}
            {data.featured ? <p className="featured">featured</p> : null}
          </div>
          <div className="container-position">
            <p className="position">{data.position}</p>
          </div>
          <div className="container-post-details">
            <p className="p-detail">{data.postedAt}</p>
            <p className="p-detail">{data.contract}</p>
            <p className="p-detail">{data.location}</p>
          </div>
        </div>
      </div>

      <div className="container-tags">{tagElements}</div>
    </StyledListing>
  );
};

Listing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Listing;
