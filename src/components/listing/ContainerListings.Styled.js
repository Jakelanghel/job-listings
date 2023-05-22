import styled from "styled-components";

export const ContainerListings = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding-top: ${(props) => (props.filters ? "2rem" : "4rem")};
  padding-bottom: 3rem;
`;
