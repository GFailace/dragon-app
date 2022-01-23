import React from "react";
import { NavLink } from "react-router-dom";

import { Box } from "../styles/Flex";
import { NavButton } from "../styles/Nav";

function Menu() {
  const isAuth = sessionStorage.getItem("localAuth");

  function logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  return isAuth ? (
    <Box justifyContent="flex-end" width="50%">
      <NavLink to="/create">
        <NavButton>Criar Dragão</NavButton>
      </NavLink>

      <Box onClick={logout}>
        <NavButton>Sair</NavButton>
      </Box>
    </Box>
  ) : (
    ""
  );
}

export default Menu;
