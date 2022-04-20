import React from "react";
import { Text, Flex, Button, Box } from "@chakra-ui/react";
import { ModalComponent } from "../../common/modal";
import { FileInputField, InputField } from "../../common/inputField";
import { Ticket, User, Image } from "phosphor-react";
import usePollForm from "./usePollForm";
import { ValidationRules, CandidateValidationRules } from "./validationRules";

export const CreatePoll = ({ isOpen, onOpen, onClose }) => {
  const {
    errors,
    candidateFieldErrors,
    loading,
    candidates,
    values,
    handleChange,
    addCandidate,
    handleSubmit,
    handleImage,
  } = usePollForm(ValidationRules, CandidateValidationRules);

  const ErrorMessage = ({ type, index }) => {
    const errorMessage =
      index === -1
        ? errors[type]
        : candidateFieldErrors[index] && candidateFieldErrors[index][type];
    return errorMessage ? (
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
          name="pollName"
          type="text"
          placeholder="Name of poll"
         //  value={values.pollName}
          icon={<Ticket size={20} />}
          onChange={(e) => {
            handleChange(e, -1);
          }}
        />
        <ErrorMessage type="pollName" index={-1} />
        <Flex justifyContent="space-between" alignItems="center" mb="10px">
          <div />
          <Box onClick={onOpen}>
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
          <div key={index + 1}>
            <Text pb="10px">Candidate {index + 1}</Text>
            <InputField
              name="name"
              type="text"
              placeholder="Name of Candidate"
              value={item.name}
              icon={<User size={20} />}
              onChange={(e) => handleChange(e, index)}
            />
            <ErrorMessage type="name" index={index} />

            <Box pos="relative" top="0" left="0">
              <FileInputField
                color="#BDBDBD"
                name="image"
                type="file"
                file={item.image}
                icon={<Image size={20} />}
                onChange={(e) => handleImage(e, index)}
              />
              <ErrorMessage type="image" index={index} />
            </Box>
          </div>
        ))}

        <Button
          size="md"
          h="50px"
          w="100%"
          bg="brand.primary"
          color="brand.white"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "Please wait..." : "Create Poll"}
        </Button>
      </form>
    </ModalComponent>
  );
};
