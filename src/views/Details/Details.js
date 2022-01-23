import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import api from "../../services/api";

import Button from "../../components/Button";
import ButtonSecondary from "../../components/ButtonSecondary";
import DragonDetailsCard from "../../components/DragonDetailsCard";

import { Box, Flex } from "../../styles/Flex";
import EditForm from "../../components/Forms/EditForm";

function Details({ match }) {
  const [dragonData, setDragonData] = useState();
  const [errorReq, setErrorReq] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  async function loadDragonData() {
    await api
      .get(`/dragon/${match.params.id}`)
      .then((response) => {
        setDragonData(response.data);
        setIsloading(false);
        localStorage.setItem("dragon", JSON.stringify(response.data));
      })
      .catch((error) => {
        setErrorReq(true);
      });
  }

  function toggleEdit() {
    setIsEdit(!isEdit);
  }

  useEffect(() => {
    loadDragonData();
  }, []);

  return (
    <Flex>
      <Box flexWrap="wrap" justifyContent="center" mx="auto" width="80%">
        <h3>Dragon Details</h3>
        {dragonData && !isLoading ? (
          <DragonDetailsCard
            createdAt={format(
              new Date(dragonData?.createdAt),
              "dd/MM/yyyy - HH:mm",
              {
                locale: ptBR,
              }
            )}
            id={dragonData?.id}
            key={dragonData?.id}
            name={dragonData?.name.toUpperCase()}
            type={dragonData?.type.toUpperCase()}
          />
        ) : !dragonData && isLoading && !errorReq ? (
          <Flex>
            <Box
              alignContent="center"
              justifyContent="center"
              mx="auto"
              width="100%"
            >
              <h3>Carregando...</h3>
            </Box>
          </Flex>
        ) : (
          <Flex>
            <Box
              alignContent="center"
              justifyContent="center"
              mx="auto"
              width="100%"
            >
              <h3>Nenhum dragão encontrado com este ID!</h3>
            </Box>
          </Flex>
        )}

        {isEdit ? (
          <Flex flexDirection="column">
            <Box justifyContent="center" mx="auto" my="2%" width="50%">
              <EditForm id={dragonData.id} />
            </Box>
          </Flex>
        ) : (
          ""
        )}

        <Box
          alignContent="center"
          justifyContent="center"
          mx="auto"
          width={[1, 1 / 3]}
        >
          <Box width="50%">
            <NavLink to="/" style={{ marginRight: "1%", width: "100%" }}>
              <ButtonSecondary buttonText={"Voltar"} buttonType="button" />
            </NavLink>
          </Box>
          {!errorReq ? (
            <Box width="50%" onClick={toggleEdit}>
              <Button buttonText={"Editar"} />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default Details;
