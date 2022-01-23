import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import ButtonSecondary from "../../components/ButtonSecondary";

import { ErrorSpan } from "../../styles/ErrorMessage";
import { Box, Flex } from "../../styles/Flex";
import { Form, InputSubmit, InputTextLogin } from "../../styles/Form";

import dragon from "../../assets/dragon.png";

function SignUp() {
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      localStorage.setItem(
        "userSignup",
        JSON.stringify({ email: data.email, senha: data.senha })
      );
      window.location.replace("/login");
    } else {
      setError("Conta não criada! Tente novamente.");
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
          <h1>Dragon App Sign Up</h1>
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

          <Box
            alignContent="center"
            flexDirection="column"
            justifyContent="center"
            mx="auto"
            width="100%"
          >
            <Box my={1} width={1}>
              <InputSubmit type="submit">Sign Up</InputSubmit>
            </Box>
            <Box my={1} width={1}>
              <Link to="/login" style={{ marginRight: "1%", width: "100%" }}>
                <ButtonSecondary buttonText={"Voltar"} buttonType="button" />
              </Link>
            </Box>
          </Box>
        </Form>
      </Box>
    </Flex>
  );
}

export default SignUp;
