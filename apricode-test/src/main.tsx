import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import MainStore from './store/MainStore.ts';

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider
    value={{
      main: new MainStore(),
    }}>
    <App />
  </Context.Provider>,
);
