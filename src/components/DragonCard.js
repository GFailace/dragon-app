import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import api from "../services/api";

import dragon from "../assets/dragon.png";

import { DragonCardStyled } from "../styles/DragonCardStyled";
import { Box } from "../styles/Flex";
import { Variables } from "../styles/Variables";

function DragonCard({ id, name }) {
  const [error, setError] = useState();
  let history = useHistory();

  async function deleteDragon() {
    await api
      .delete(`/dragon/${id}`)
      .then()
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }

  function redirectDetails() {
    history.push(`/dragon/${id}`);
  }

  function openAlert() {
    Swal.fire({
      title: "Você tem certeza?",
      text: "O item será excluído permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: `${Variables.colorPrimary}`,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, excluir!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDragon();
        if (error) {
          Swal.fire({
            title: "Erro!",
            text: "O item não foi excluído!",
            icon: "error",
            confirmButtonColor: `${Variables.colorPrimary}`,
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          });
        } else {
          Swal.fire({
            title: "Excluído!",
            text: "O item foi excluído com sucesso.",
            icon: "success",
            confirmButtonColor: `${Variables.colorPrimary}`,
          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          });
        }
      }
    });
  }

  return (
    <DragonCardStyled>
      <img src={dragon} alt="Dragão" />
      <p>{name}</p>

      <Box justifyContent="center" width="100%">
        <Box
          alignItems="center"
          justifyContent="center"
          onClick={redirectDetails}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-info-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
          <span>+ Infos</span>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          onClick={redirectDetails}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
          <span>Editar</span>
        </Box>
        <Box alignItems="center" justifyContent="center" onClick={openAlert}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
          <span>Excluir</span>
        </Box>
      </Box>
    </DragonCardStyled>
  );
}

export default DragonCard;
