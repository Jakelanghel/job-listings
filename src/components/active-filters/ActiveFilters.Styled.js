import styled from "styled-components";

export const StyledActiveFilters = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -25px;
  z-index: 1;

  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
  border-radius: 10px;

  .container-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--color-dark-grayish-cyan);
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
