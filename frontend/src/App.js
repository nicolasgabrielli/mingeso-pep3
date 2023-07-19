import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import './fonts/TitilliumWeb-Regular.ttf';
import './fonts/TitilliumWeb-Bold.ttf';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0D1321',
    },
    secondary: {
      main: '#1D2D44',
    },
    tertiary: {
      main: '#3E5C76',
    },
  },
  typography: {
    fontFamily: ['Bold'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
