import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      maxHeight="80px"
      borderTop="2px solid black"
      borderBottom="2px solid black"
      textAlign="center"
      flexWrap="wrap"
    >
      <Box
        w={{ base: "100%", md: "50%" }}
        h="100%"
        borderRight={{ base: "none", md: "1px solid black" }}
        p="25px 0"
      >
        <Text>PROYECTO: Metodo Ahorro</Text>
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        h="100%"
        borderLeft="1px solid black"
        borderBottom={{ base: "2px solid black", md: "none" }}
        p="25px 0"
      >
        <Text>CONTACTO &gt; davisprojectjr@gmail.com</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
