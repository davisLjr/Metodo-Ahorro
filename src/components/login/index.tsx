// login/index.tsx
"use client";

import React, { useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

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
      <h1>Página de inicio de sesión</h1>
      <button onClick={handleLogin}>Iniciar sesión con Netlify</button>
    </div>
  );
};

export default LoginPage;
