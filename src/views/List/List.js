import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import DragonCard from "../../components/DragonCard";
import { Box, Flex } from "../../styles/Flex";
import Button from "../../components/Button";

function DragonList() {
  const [dragonsData, setDragonsData] = useState([]);

  let history = useHistory();

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
      <Box alignItems="center" flexDirection="column" justifyContent="center">
        <h3>Lista de Dragões</h3>
        <Box
          alignItems="center"
          justifyContent="center"
          mb={3}
          width={[1 / 2, 1 / 6]}
        >
          <Button
            buttonText={
              <Box
                alignItems="center"
                justifyContent="center"
                onClick={() => {
                  history.push("/create");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <span>Adicionar dragão</span>
              </Box>
            }
          />
        </Box>
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
