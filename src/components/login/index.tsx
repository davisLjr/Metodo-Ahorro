// login/index.tsx
"use client";

import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button, Heading } from '@chakra-ui/react'

const LoginPage = () => {
  useEffect(() => {
    // Verificar si estamos en el lado del cliente antes de usar netlifyIdentity
    if (process.browser) {
      // Configurar la biblioteca netlify-identity-widget
      netlifyIdentity.init();
    }
  }, []);

  const handleLogin = () => {
    // Abrir el widget de inicio de sesión
    netlifyIdentity.open();
  };

  return (
    <div>
      <Heading>Página de inicio de sesión</Heading>
      <Button onClick={handleLogin}>Iniciar sesión con Netlify</Button>
    </div>
  );
};

export default LoginPage;
