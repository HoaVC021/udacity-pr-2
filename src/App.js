import React from 'react';

import Router from './Router';
import ThemeProvider from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
