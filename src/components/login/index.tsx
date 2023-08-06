// login/index.tsx
"use client";

import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button, Heading } from '@chakra-ui/react';

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
      <Heading>Página de inicio de sesión</Heading>
      <Button onClick={handleLogin}>Iniciar sesión con Netlify</Button>
    </div>
  );
};

export default LoginPage;
