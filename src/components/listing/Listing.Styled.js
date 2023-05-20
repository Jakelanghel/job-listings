import styled from "styled-components";

export const StyledListing = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding: 1.5rem;
  padding-top: 2.25rem;
  border-radius: 10px;
  border-left: solid 8px var(--dark-cyan);

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .container-listing-details {
  }

  .container-logo {
    width: 60px;
    position: absolute;
    top: -33px;
    left: 1.5rem;
  }

  .logo {
    width: 100%;
  }

  .container-company {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .company {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--dark-cyan);
    margin-right: 1.25rem;
  }

  .new,
  .featured {
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 25px;
  }

  .new {
    background-color: var(--dark-cyan);
  }

  .featured {
    background-color: var(--color-very-dark-grayish-cyan);
  }

  .container-position {
    padding: 1rem 0;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .container-post-details {
    display: flex;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px var(--color-dark-grayish-cyan);
  }

  .p-detail {
    font-size: 1rem;
    color: var(--color-dark-grayish-cyan);
    position: relative;
    padding-left: 15px;
  }

  .p-detail::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--color-dark-grayish-cyan);
  }

  .container-tags {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .tag {
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 700;
    color: var(--dark-cyan);
    background-color: var(--color-filter-tablets);
    padding: 0.75rem;
    border-radius: 5px;
  }
`;
