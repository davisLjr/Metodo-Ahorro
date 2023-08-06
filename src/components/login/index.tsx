// login/index.tsx
"use client";

import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button, Heading } from '@chakra-ui/react'
import Hero from './component/hero';

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
      <Hero/>
      <Button onClick={handleLogin}>Iniciar sesión con Netlify</Button>
    </div>
  );
};

export default LoginPage;
