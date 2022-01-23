import styled from "styled-components";

export const NavButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  height: 100%;
  margin: 0 0.1rem;
  text-transform: uppercase;
  transition: 0.3s;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;
