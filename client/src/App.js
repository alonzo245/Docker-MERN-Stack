import React, { useState, useContext } from 'react'
import { ThemeProvider } from './context/ThemeSelectorState'
import { GlobalProvider } from './context/GlobalState';
import { Layout } from './hoc/Layout'
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
