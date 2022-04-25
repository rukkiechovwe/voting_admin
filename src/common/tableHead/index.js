import { Th } from "@chakra-ui/react";

const TableHead = ({ text,className }) => {
  return (
    <Th
      textTransform="capitalize"
      fontWeight="600"
      fontSize="13px"
      fontFamily="'BRFirmaRegular', sans-serif "
      borderBottom="1px"
      borderColor="#E0E0E0"
      className={className}
    >
      {text}
    </Th>
  );
};

export default TableHead;
