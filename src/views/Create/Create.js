import React from "react";

import { Box, Flex } from "../../styles/Flex";

import CreateForm from "../../components/Forms/CreateForm";

function Create() {
  return (
    <Flex justifyContent="center" height="100%">
      <Box width={[1 / 1.5, 1 / 5]}>
        <CreateForm />
      </Box>
    </Flex>
  );
}

export default Create;
