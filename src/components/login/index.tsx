// login/index.tsx
"use client";

import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { Button, Heading } from '@chakra-ui/react';
import Hero from './component/hero';

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
      <Hero/>
      <Button onClick={handleLogin}>Iniciar sesión con Netlify</Button>
    </div>
  );
};

export default LoginPage;
