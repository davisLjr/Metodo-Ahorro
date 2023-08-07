// login/index.tsx
"use client";

import React, { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { Button, Heading } from "@chakra-ui/react";
import Hero from "./component/hero";

const LoginPage = () => {
  useEffect(() => {
    if (process.browser) {
      netlifyIdentity.init();
    }
  }, []);

  const handleLogin = () => {
    if (process.browser) {
      netlifyIdentity.open();
    }
  };

  return (
    <div>
      <Hero>
        <Button
          background="black"
          color="white"
          fontWeight="light"
          letterSpacing="2px"
          onClick={handleLogin}
          transition= "0.4s ease-out"
          _hover={{
            background: "#ffffff",
            color: "black",
            border: "2px solid black",
            fontWeight: "medium",
            transition: "0.4s ease-out",
          }}
        >
          Continuar
        </Button>
      </Hero>
    </div>
  );
};

export default LoginPage;
