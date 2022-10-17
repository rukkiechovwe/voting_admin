import React, { useEffect } from "react";
import {
  Text,
  Flex,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { ModalComponent } from "../../common/modal";
import { SelectField, InputField } from "../../common/inputField";
import { Ticket, Calendar, Timer, Student } from "phosphor-react";
import useElectionForm from "./useElectionForm";
import { ValidationRules } from "./validationRules";

export const EditElection = ({ isOpen, onOpen, onClose, values }) => {
  const { handleChange, handleSubmit, setPoll, poll, errors, loading } =
    useElectionForm(ValidationRules, onClose);

  useEffect(() => {
    if (values?.pollsAvailable) {
      setPoll(values.pollsAvailable);
    }
  }, [values]);

  const ErrorMessage = ({ type, mt, mb }) => {
    const errorMessage = errors[type];
    return errors[type] ? (
      <p
        style={{
          color: "red",
          marginTop: mt ? mt : "-15px",
          textAlign: "left",
          alignSelf: "flex-start",
          marginBottom: mb ? mb : "20px",
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
      header="Edit Election Details"
      footer={false}
      size="lg"
      isCentered={false}
    >
      <form style={{ color: "#BDBDBD" }}>
        <Box>
          <Text fontSize="13px">Election Year</Text>
          <InputField
            name="electionYear"
            type="text"
            placeholder="Election Year"
            value={values.electionYear}
            icon={<Ticket size={20} />}
            onChange={(e) => handleChange(e)}
          />
          <ErrorMessage type="electionYear" />
        </Box>
        <Flex justifyContent="space-between">
          <Box width="100%" pr="10px">
            <Text fontSize="13px">Start Date</Text>
            <InputField
              name="startDate"
              type="date"
              value={values.startDate}
              icon={<Calendar size={20} />}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage type="startDate" />
          </Box>
          <Box width="100%" pl="10px">
            <Text fontSize="13px">End Date</Text>
            <InputField
              name="endDate"
              type="date"
              value={values.endDate}
              icon={<Calendar size={20} />}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage type="endDate" />
          </Box>
        </Flex>
        <Flex justifyContent="space-between">
          <Box width="100%" pr="10px">
            <Text fontSize="13px">Start Time</Text>
            <InputField
              name="startTime"
              type="time"
              value={values.startTime}
              icon={<Timer size={20} />}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage type="startTime" />
          </Box>
          <Box width="100%" pl="10px">
            <Text fontSize="13px">End Time</Text>
            <InputField
              name="endTime"
              type="time"
              value={values.endTime}
              icon={<Timer size={20} />}
              onChange={(e) => handleChange(e)}
            />
            <ErrorMessage type="endTime" />
          </Box>
        </Flex>
        <Box>
          <SelectField
            name="minimumLevel"
            placeholder="Minimum Level"
            icon={<Student size={20} />}
            onChange={(e) => handleChange(e)}
          >
            <option value="200" selected={values.minimumLevel === "200"}>
              200 Level
            </option>
            <option value="300" selected={values.minimumLevel === "300"}>
              300 Level
            </option>
            <option value="400" selected={values.minimumLevel === "400"}>
              400 Level
            </option>
            <option value="500" selected={values.minimumLevel === "500"}>
              500 Level
            </option>
          </SelectField>
          <ErrorMessage type="minimumLevel" />
        </Box>
        <Box mb="20px">
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              color="rgb(189, 189, 189)"
              fontSize="14px"
              borderColor="#E0E0E0 !important"
              borderRadius="md"
              border="1px"
              h="50px"
              width="100%"
              focusBorderColor="brand.primary"
              background="transparent"
              fontWeight={400}
              textAlign="left"
              sx={{
                ":hover": {
                  background: "transparent !important",
                  color: "rgb(189, 189, 189) !important",
                },
                outline: "none",
                ":focus": {
                  background: "transparent !important",
                  color: "rgb(189, 189, 189) !important",
                },
              }}
            >
              Polls
            </MenuButton>
            <MenuList minWidth="240px" zIndex="100">
              <MenuOptionGroup
                title="Poll"
                type="checkbox"
                onChange={(value) => setPoll(value)}
                defaultValue={values.pollsAvailable}
              >
                <MenuItemOption value="President">President</MenuItemOption>
                <MenuItemOption value="Vice President">
                  Vice President
                </MenuItemOption>
                <MenuItemOption value="Secretary">Secretary</MenuItemOption>
                <MenuItemOption value="Financial Secretary">
                  Financial Secretary
                </MenuItemOption>
                <MenuItemOption value="Director of Sports">
                  Director of Sports
                </MenuItemOption>
                <MenuItemOption value="Director of Welfare">
                  Director of Welfare
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <ErrorMessage type="poll" mt="5px" mb="10px" />
          <Text pt="5px">
            Positions Available : [
            {poll.length > 0 ? poll.join(", ") : <em>None selected yet</em>}]
          </Text>
        </Box>

        <Button
          size="md"
          h="50px"
          w="100%"
          bg="brand.primary"
          color="brand.white"
          onClick={(e) => handleSubmit(e)}
        >
          {loading ? "Please wait..." : "Edid Election Details"}
        </Button>
      </form>
    </ModalComponent>
  );
};
