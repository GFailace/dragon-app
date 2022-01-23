import React from "react";

import dragon from "../assets/dragon.png";

import { DragonCardStyled } from "../styles/DragonCardStyled";

function DragonDetailsCard({ createdAt, id, name, type }) {
  return (
    <DragonCardStyled>
      <img src={dragon} alt="Dragão" />
      <p>Nome - {name}</p>
      <p>ID - {id}</p>
      <p>Tipo - {type}</p>
      <p>Criado em - {createdAt}</p>
    </DragonCardStyled>
  );
}

export default DragonDetailsCard;
