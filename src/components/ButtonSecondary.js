import React from "react";

import { ButtonSecondaryStyled } from "../styles/Button";

function ButtonSecondary({ buttonText, buttonType }) {
  return (
    <ButtonSecondaryStyled type={buttonType}>
      {buttonText}
    </ButtonSecondaryStyled>
  );
}

export default ButtonSecondary;
