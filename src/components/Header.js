import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex } from "../styles/Flex";
import { Variables } from "../styles/Variables";

import Menu from "./Menu";

function Header() {
  return (
    <Flex
      backgroundColor={Variables.colorPrimary}
      color={Variables.colorWhite}
      mb={3}
    >
      <Box px={3} width="50%">
        <Link to="/">
          <h2>Dragon App</h2>
        </Link>
      </Box>
      <Box alignSelf="center" justifyContent="flex-end" p={0} m={0} width="50%">
        <Menu />
      </Box>
    </Flex>
  );
}

export default Header;
