import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  font-size: 0.95rem;
  font-weight: 700;
  color: var(--dark-cyan);
  background-color: var(--color-filter-tablets);
  border-radius: 5px;
  padding-right: 0;

  .filter {
    padding: 6px;
  }

  .container-remove {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 6px;
    background-color: var(--dark-cyan);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: var(--color-very-dark-grayish-cyan);
    }
  }

  img {
    width: 12px;
  }
`;
