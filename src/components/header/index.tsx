import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <Box
      width="70px"
      height="100vh"
      background="black"
      position="sticky"
      left="0"
      top="0"
      zIndex="10"
      textAlign="center"
      p="20px 0"
    >
      <Button
        ref={btnRef}
        onClick={onOpen}
        background="transparent"
        title="menu"
        _hover={{
          background: "transparent",
        }}
      >
        <Image src="/layout/grid.png" w="18px" alt="Icono de cuadrícula" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Metodo Ahorro</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" gap="1rem">
            <Link as={NextLink} href="/home">
              Options
            </Link>
            <Link as={NextLink} href="/home">
              Options
            </Link>
            <Link as={NextLink} href="/home">
              Options
            </Link>
            <Link as={NextLink} href="/home">
              Options
            </Link>
            <Link as={NextLink} href="/home">
              Options
            </Link>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
export default Header;
