import styled from "styled-components";
import { flexbox, grid, layout, space } from "styled-system";
import { Variables } from "./Variables";

export const Flex = styled.div`
  ${flexbox};
  ${layout};
  ${space};

  ${({ backgroundColor }) =>
    backgroundColor === undefined
      ? "background: none"
      : `background: ${backgroundColor}`};
  ${({ color }) =>
    color === undefined ? `color: ${Variables.colorBlack}` : `color: ${color}`};
  display: flex;
  ${({ flexDirection }) =>
    flexDirection === undefined
      ? "flex-direction: row"
      : `flex-direction: ${flexDirection}`};
  width: 100%;
`;

export const Box = styled.div`
  ${flexbox};
  ${grid};
  ${layout};
  ${space};

  display: flex;
  ${({ flexDirection }) =>
    flexDirection === undefined
      ? "flex-direction: row"
      : `flex-direction: ${flexDirection}`};

  svg {
    cursor: pointer;
  }
`;
