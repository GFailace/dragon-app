import styled from "styled-components";

import { Variables } from "./Variables";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 2% auto;
  text-align: center;
  width: 100%;

  span {
    color: ${Variables.colorPrimary};
  }
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 1px solid ${Variables.colorPrimary};
  font-size: 14px;
  margin: 5% 0;

  &:focus {
    border-bottom: 1px solid ${Variables.colorPrimaryHover};
    outline: 0;
  }
`;

export const InputTextLogin = styled.input`
  border: none;
  border-bottom: 1px solid ${Variables.colorPrimary};
  font-size: 18px;
  margin: 5% 0;

  &:focus {
    border-bottom: 1px solid ${Variables.colorPrimaryHover};
    outline: 0;
  }
`;

export const InputSubmit = styled.button`
  background: ${Variables.colorPrimary};
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 100%;
  padding: 2%;
  margin: 2% 1%;
  transition: 0.3s;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${Variables.colorPrimaryHover};
  }
`;
