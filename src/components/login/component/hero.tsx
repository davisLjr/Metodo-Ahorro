import React, { ReactNode } from "react";
import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";

interface HeroProps {
  children?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <Flex h="100vh">
      <Box
        w={{base:"100%", lg:"50%"}}
        p="4rem 2rem 2rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Heading textAlign="center" fontWeight="light" as="h2" size="xl">
            Metodo Ahorro
          </Heading>
        </Box>
        <Flex flexDirection="column" gap="3" textAlign="center">
          <Heading fontWeight="medium" as="h3" size="xl" marginBottom="0">
            Bienvenido.
          </Heading>
          <Text color="#a1a1a1">Por favor inicia tu sesión.</Text>
          {children}
        </Flex>
        <Box>
          <Text fontSize="sm" textAlign="center" color="#a1a1a1">
            Con Método Ahorro, podrás gestionar tus finanzas de manera efectiva,
            considerando tus activos y pasivos. También podrás establecer metas
            de ahorro mensuales y lograr tus objetivos económicos personales.
          </Text>
        </Box>
      </Box>
      <Box
        w="50%"
        display={{base: "none", lg: "block"}}
        bgImage="url('/login/login-hero-two.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
    </Flex>
  );
};

export default Hero;
