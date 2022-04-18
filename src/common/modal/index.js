import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
export const ModalComponent = ({
  children,
  header,
  isOpen,
  onOpen,
  onClose,
  footer,
  size,
  isCentered,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        size={size}
        onClose={onClose}
        isCentered={isCentered}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton
            size="lg"
            _hover={{
              background: "transparent !important",
              color: "currentColor !important",
            }}
            _focus={{
              background: "transparent !important",
              color: "currentColor !important",
            }}
          />
          <ModalBody pb={6}>{children}</ModalBody>

          {footer && (
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Continue
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
