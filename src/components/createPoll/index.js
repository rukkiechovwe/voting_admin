import React from "react";
import {
  Text,
  Flex,
  Button,
  ButtonGroup,
  IconButton,
  Box,
  Heading,
} from "@chakra-ui/react";
import { ModalComponent } from "../../common/modal";
import { FileInputField, InputField } from "../../common/inputField";
import { Ticket, User, Image, Plus } from "phosphor-react";
import usePollForm from "./usePollForm";
import { ValidationRules } from "./validationRules";

export const CreatePoll = ({ isOpen, onOpen, onClose }) => {
  const {
    errors,
    loading,
    candidates,
    handleChange,
    addCandidate,
    handleSubmit,
    handleImage,
  } = usePollForm(ValidationRules);

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
      header="Create Poll"
      footer={false}
      size="lg"
      isCentered={false}
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
          <p></p>
          {/* <Heading as="h6" color="brand.black" fontSize="lg">
            Candidates
          </Heading> */}
          <Box onClick={onOpen}>
            {/* <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                aria-label="Add Candidate"
                p="5px"
                height=" 35px"
                width="35px"
                borderRadius="20px"
                bg="brand.primary"
                color="brand.white"
                icon={<Plus size={32} />}
                onClick={(e) => addCandidate(e)}
              />
             
            </ButtonGroup> */}
            <Button
              p="5px 10px"
              size="sm"
              bg="brand.primary"
              color="brand.white"
              onClick={(e) => addCandidate(e)}
            >
              Add Candidate
            </Button>
          </Box>
        </Flex>

        {candidates.map((item, index) => (
          <div key={index}>
            <Text pb="10px">Candidate {index + 1}</Text>
            <InputField
              color="#BDBDBD"
              name="candidate_name"
              type="text"
              placeholder="Name of Candidate"
              icon={<User size={20} />}
              onChange={(e) => {
                handleChange(e, index);
              }}
            />
            <Box pos="relative" top="0" left="0">
              <FileInputField
                color="#BDBDBD"
                name="candidate_pic"
                type="file"
                file={item.image ? item.image : null}
                icon={<Image size={20} />}
                onChange={(e) => {
                  handleImage(e, index);
                }}
              />
            </Box>
          </div>
        ))}

        <Button
          size="md"
          h="50px"
          w="100%"
          bg="brand.primary"
          color="brand.white"
        >
          Create Poll
        </Button>
      </form>
    </ModalComponent>
  );
};
