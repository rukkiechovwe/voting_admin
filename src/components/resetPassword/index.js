import { Box, Button, Text } from "@chakra-ui/react";
import { PasswordInputField } from "../../common/inputField";


const ResetPassword = ({ fullPage, title }) => {
  return (
    <Box
      bg="brand.white"
      color="brand.black"
      borderRadius="10px"
      mb="20px"
      p="20px"
      boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
      w="100%"
      maxWidth={500}
    >
      <Text fontSize={20} fontWeight="600" pb="20px">
        Reset Password
      </Text>
      <form>
        <Box pb="20px">
          <PasswordInputField
            name="oldPassword"
            onChange="oldPassword"
            placeholder="Enter old Password"
            type="password"
          />
        </Box>
        <Box pb="20px">
          <PasswordInputField
            name="newPassword"
            onChange="newPassword"
            placeholder="Enter new Password"
            type="password"
          />
        </Box>
        <Button
          w="100%"
          bg="brand.primary"
          color="brand.white"
          border="none"
          boxShadow=" 0px 3px 10px rgba(200, 200, 200, 0.17)"
          mt="35px"
          py="24px"
        >
          Reset
        </Button>
      </form>
    </Box>
  );
};

export default ResetPassword;
