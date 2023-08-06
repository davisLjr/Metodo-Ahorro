import React from "react"
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/react'

const Hero = () => {

  return (
    <Flex>
      <Box>
        <Heading>Metodo Ahorro</Heading>

        <Box>
          <Heading>Bienvenido de nuevo.</Heading>
          <Text>Por favor inicia tu sesión.</Text>
        </Box>
      </Box>
      <Box backgroundImage="url('/login/login-hero.jpg')" w="50%" h="100vh"></Box>
    </Flex>
  );
};

export default Hero;
