import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { EnvelopeSimple } from "phosphor-react";

import useLoginForm from "./useLoginForm";
import { ValidationRules } from "./validationRules";
import { InputField, PasswordInputField } from "../../common/inputField";

function Login() {
  const { errors, loading, handleChange, handleSubmit } =
    useLoginForm(ValidationRules);

  const ErrorMessage = ({ type }) => {
    const errorMessage = errors[type];
    return errors[type] ? (
      <p
        style={{
          color: "red",
          marginTop: "-15px",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: "20px",
        }}
      >
        {errorMessage}
      </p>
    ) : (
      <Text />
    );
  };

  return (
    <Box
      minH="100vh"
      pos="fixed"
      w="100%"
      zIndex={2}
      top={0}
      left={0}
      bg="#fff"
    >
      <Flex h="100vh" justifyContent="center" alignItems="center" w="100%">
        <form>
          <Flex
            h="430px"
            w="530px"
            px="30px"
            bg="#fff"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            boxShadow=" 0px 0px 50px rgba(0, 0, 0, 0.05)"
          >
            <Heading mb="30px" as="h1" color="brand.primary" textAlign="center">
              LOGO
            </Heading>
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                {errors.authentication}
              </p>
            )}

            <InputField
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={(e) => handleChange(e)}
              icon={<EnvelopeSimple size={20} />}
            />
            <ErrorMessage type="email" />
            <PasswordInputField
              name="password"
              type="password"
              onChange={(e) => handleChange(e)}
              placeholder="Password"
            />
            <ErrorMessage type="password" />

            <Button
              size="md"
              h="50px"
              w="470px"
              bg="brand.primary"
              color="brand.white"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? "please wait..." : "Login"}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}

export default Login;
