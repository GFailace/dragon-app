import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { ErrorSpan } from "../../styles/ErrorMessage";
import { Box, Flex } from "../../styles/Flex";
import { Form, InputSubmit, InputTextLogin } from "../../styles/Form";

import dragon from "../../assets/dragon.png";

function Login() {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.email === "teste@teste.com" && data.senha === "123456") {
      sessionStorage.setItem("localAuth", true);
      sessionStorage.setItem(
        "user",
        JSON.stringify({ id: "1", username: "Teste" })
      );
      window.location.replace("/");
    } else {
      setError("Conta inválida! Tente novamente.");
    }
  };
  console.log(errors);

  return (
    <Flex justifyContent="center" height="100%">
      <Box width={[1 / 1.5, 1 / 5]}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box justifyContent="center" width="100%">
            <img src={dragon} alt="Dragon App" />
          </Box>
          <h1>Dragon App Log In</h1>
          <InputTextLogin
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: /^\S+@\S+$/i,
            })}
          />

          <ErrorSpan>
            <ErrorMessage errors={errors} name="email" />
          </ErrorSpan>

          <InputTextLogin
            type="password"
            placeholder="Senha"
            {...register("senha", { required: "Senha é obrigatório" })}
          />

          <ErrorSpan>
            <ErrorMessage errors={errors} name="senha" />
          </ErrorSpan>

          {error ? <ErrorSpan>{error}</ErrorSpan> : ""}

          <InputSubmit type="submit">Log In</InputSubmit>
        </Form>
      </Box>
    </Flex>
  );
}

export default Login;
