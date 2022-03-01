import React from "react";
import { ModalComponent } from "../../common/modal.js/index.js";
import {
  InputField,
  PasswordInputField,
} from "../../common/inputField/index.js";
import { User } from "phosphor-react";

export const CreateAdmin = ({ isOpen, onOpen, onClose }) => {
  return (
    <ModalComponent
      color="#BDBDBD"
      isOpen={isOpen}
      onClose={onClose}
      header="Create Admin"
      footer={true}
    >
      <form style={{ color: "#BDBDBD" }}>
        <InputField
          color="#BDBDBD"
          name="admin_name"
          type="text"
          placeholder="Name"
          icon={<User size={20} />}
        />
        <InputField
          color="#BDBDBD"
          name="admin_name"
          type="email"
          placeholder="Email"
          icon={<User size={20} />}
        />
        <PasswordInputField
          color="#BDBDBD"
          name="admin_name"
          placeholder="Password"
          type="password"
        />
      </form>
    </ModalComponent>
  );
};
