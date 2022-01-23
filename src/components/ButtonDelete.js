import React from "react";

import { ButtonDeleteStyled } from "../styles/Button";

function ButtonDelete({ buttonText, buttonType }) {
  return (
    <ButtonDeleteStyled type={buttonType}>{buttonText}</ButtonDeleteStyled>
  );
}

export default ButtonDelete;
