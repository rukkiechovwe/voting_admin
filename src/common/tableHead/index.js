import { Th } from "@chakra-ui/react";

const TableHead = ({ text }) => {
  return (
    <Th
      textTransform="capitalize"
      fontWeight="600"
      fontSize="13px"
      fontFamily="'GTWalsheimProRegular', sans-serif "
      borderBottom="1px"
      borderColor="#E0E0E0"
    >
      {text}
    </Th>
  );
};

export default TableHead;
