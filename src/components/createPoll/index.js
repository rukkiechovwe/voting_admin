import React from "react";
import { Text, Flex, ButtonGroup, IconButton, Box } from "@chakra-ui/react";
import { ModalComponent } from "../../common/modal.js/index.js";
import { FileInputField, InputField } from "../../common/inputField/index.js";
import { Ticket, User, Image, Plus } from "phosphor-react";

export const CreatePoll = ({ isOpen, onOpen, onClose }) => {
  return (
    <ModalComponent
      color="#BDBDBD"
      isOpen={isOpen}
      onClose={onClose}
      header="Create Poll"
      footer={true}
    >
      <form style={{ color: "#BDBDBD" }}>
        <InputField
          color="#BDBDBD"
          name="poll_name"
          type="text"
          placeholder="Name of poll"
          icon={<Ticket size={20} />}
        />
        <Flex justifyContent="space-between" alignItems="center" mb="10px">
          <Text>Candidates</Text>
          <Box onClick={onOpen}>
            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Create Poll"
                p="5px"
                height=" 35px"
                width="35px"
                borderRadius="20px"
                bg="brand.primary"
                color="brand.white"
                icon={<Plus size={32} />}
              />
            </ButtonGroup>
          </Box>
        </Flex>

        <InputField
          color="#BDBDBD"
          name="candidate_name"
          type="text"
          placeholder="Name of Candidate"
          icon={<User size={20} />}
        />
        <Box pos="relative" top="0" left="0">
          <FileInputField
            color="#BDBDBD"
            name="candidate_pic"
            type="file"
            icon={<Image size={20} />}
          />
        </Box>
      </form>
    </ModalComponent>
  );
};
