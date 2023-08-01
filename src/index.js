// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode theme={theme}>
    <ChakraProvider>
      <BrowserRouter>
        <ColorModeScript initialColorMode='theme.config.initialColorMode' />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
