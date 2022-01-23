import React from "react";

import { ButtonStyled } from "../styles/Button";

function Button({ buttonText, buttonType }) {
  return <ButtonStyled type={buttonType}>{buttonText}</ButtonStyled>;
}

export default Button;
