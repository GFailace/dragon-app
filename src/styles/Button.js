import styled from "styled-components";
import { Variables } from "./Variables";

export const ButtonStyled = styled.button`
  background: ${Variables.colorPrimary};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 35px;
  padding: 2%;
  margin: 1%;
  transition: 0.3s;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${Variables.colorPrimaryHover};
  }

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

    &:focus {
      outline: 0;
    }
  }

  svg {
    margin-right: 20px;
    width: 24px;
  }
`;

export const ButtonSecondaryStyled = styled.button`
  background: ${Variables.colorSecondary};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 35px;
  padding: 2%;
  margin: 1%;
  transition: 0.3s;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${Variables.colorSecondaryHover};
  }

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

    &:focus {
      outline: 0;
    }
  }
`;

export const ButtonDeleteStyled = styled.button`
  background: ${Variables.colorError};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 35px;
  padding: 2%;
  margin: 1%;
  transition: 0.3s;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${Variables.colorAlert};
  }

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

    &:focus {
      outline: 0;
    }
  }
`;
