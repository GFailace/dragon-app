import React from "react";
import { useForm } from "react-hook-form";
import { Box, Flex } from "../../styles/Flex";

import { Form, InputSubmit, InputTextLogin } from "../../styles/Form";

function Login() {
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
    }
  };
  console.log(errors);

  return (
    <Flex justifyContent="center" height="100%">
      <Box width={[1 / 1.5, 1 / 5]}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Log In</h1>
          <InputTextLogin
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <InputTextLogin
            type="password"
            placeholder="Senha"
            {...register("senha", { required: true })}
          />
          <InputSubmit type="submit">Log In</InputSubmit>
        </Form>
      </Box>
    </Flex>
  );
}

export default Login;
