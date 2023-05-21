import styled from "styled-components";
import mobileBG from "../../assets/bg-header-mobile.svg";
import desktopBG from "../../assets/bg-header-mobile.svg";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 100px;
  background-image: url(${mobileBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #5da5a4;
`;
