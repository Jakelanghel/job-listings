import styled from "styled-components";
import mobileBG from "../../assets/bg-header-mobile.svg";
import desktopBG from "../../assets/bg-header-desktop.svg";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 100px;
  background-image: url(${mobileBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #5da5a4;

  h1 {
    /* display: none; */
  }

  @media screen and (min-width: 900px) {
    background-image: url(${desktopBG});
    min-height: 150px;
  }
`;
