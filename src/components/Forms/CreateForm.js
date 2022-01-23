import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import api from "../../services/api";

import { Form, InputSubmit, InputText } from "../../styles/Form";
import { ErrorSpan } from "../../styles/ErrorMessage";
import { Box } from "../../styles/Flex";
import ButtonSecondary from "../ButtonSecondary";

function CreateForm({ match }) {
  const [error, setError] = useState();

  let history = useHistory();

  async function postDragonsData(data) {
    await api
      .post("/dragon", { name: data.nome, type: data.tipo })
      .then((response) => {
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    postDragonsData(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Criar Dragão</h1>
      <InputText
        type="text"
        placeholder="Nome"
        {...register("nome", {
          maxLength: 80,
          required: "Nome é obrigatório",
        })}
      />
      <ErrorSpan>
        <ErrorMessage errors={errors} name="nome" />
      </ErrorSpan>
      <InputText
        type="text"
        placeholder="Tipo"
        {...register("tipo", { required: "Tipo é obrigatório", maxLength: 80 })}
      />
      <ErrorSpan>
        <ErrorMessage errors={errors} name="tipo" />
      </ErrorSpan>

      <Box alignContent="center" justifyContent="center" mx="auto" width="100%">
        <Box width={1 / 2}>
          <InputSubmit type="submit">Salvar</InputSubmit>
        </Box>
        <Box width={1 / 2}>
          <Link to="/" style={{ marginRight: "1%", width: "100%" }}>
            <ButtonSecondary buttonText={"Voltar"} buttonType="button" />
          </Link>
        </Box>
      </Box>

      {error ? (
        <ErrorSpan>Formulário não enviado. Tente novamente.</ErrorSpan>
      ) : (
        ""
      )}
    </Form>
  );
}

export default CreateForm;
