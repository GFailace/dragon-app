import React, { useEffect, useState } from "react";

import api from "../../services/api";

import DragonCard from "../../components/DragonCard";
import { Box, Flex } from "../../styles/Flex";

function DragonList() {
  const [dragonsData, setDragonsData] = useState([]);

  async function loadDragonsData() {
    await api
      .get("/dragon")
      .then((response) => {
        setDragonsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    loadDragonsData();
  }, []);

  return (
    <Flex flexDirection="column" my={3}>
      <Box justifyContent="center">
        <h3>Dragons List</h3>
      </Box>
      <Box flexWrap="wrap" mx="auto" width="100%">
        {dragonsData
          .sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
          )
          .map((dragon) => {
            return (
              <Box width={[1, 1 / 3, 1 / 4]}>
                <DragonCard
                  id={dragon.id}
                  key={dragon.id}
                  name={dragon.name.toUpperCase()}
                />
              </Box>
            );
          })}
      </Box>
    </Flex>
  );
}

export default DragonList;
