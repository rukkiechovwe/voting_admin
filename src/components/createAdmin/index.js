import React,{useState} from "react";
import { User } from "phosphor-react";
import { Text, Button } from "@chakra-ui/react";
import { ModalComponent } from "../../common/modal";
import { InputField, PasswordInputField } from "../../common/inputField";
import useAdminForm from "./useAdminForm";
import { ValidationRules } from "./validationRules";

export const CreateAdmin = ({ isOpen, onOpen, onClose }) => {
  const { values,errors, loading, handleChange, handleSubmit } =
    useAdminForm(ValidationRules);
    

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
    <ModalComponent
      color="#BDBDBD"
      isOpen={isOpen}
      onClose={onClose}
      header="Create Admin"
      footer={false}
      isCentered={true}
    >
      <form style={{ color: "#BDBDBD" }} autoComplete="off">
        <InputField
          name="admin_name"
          type="text"
          placeholder="Name"
          icon={<User size={20} />}
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage type="admin_name" />
        <InputField
          name="admin_email"
          type="email"
          placeholder="Email"
          icon={<User size={20} />}
          onChange={(e) => handleChange(e)}
        />
        <ErrorMessage type="admin_email" />
        <PasswordInputField
          name="admin_password"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <ErrorMessage type="admin_password" />

        <Button
          size="md"
          h="50px"
          w="100%"
          bg="brand.primary"
          color="brand.white"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "please wait.." : "Create"}
        </Button>
      </form>
    </ModalComponent>
  );
};
