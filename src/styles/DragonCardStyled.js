import styled from "styled-components";
import { Variables } from "./Variables";

export const DragonCardStyled = styled.div`
  -webkit-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
  margin: 2%;
  width: 100%;

  a {
    align-content: center;
    color: #fff;
    display: flex;
    font-weight: 700;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 0.2rem;
    width: 100%;
  }

  svg {
    fill: ${Variables.colorBlack};
    height: 40%;
    padding: auto;
    width: 40%;
  }

  span {
    cursor: pointer;
  }
`;
