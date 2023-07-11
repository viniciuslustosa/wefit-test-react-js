import React from 'react';
import Routes from './routes';
import { CartProvider } from './contexts/CartContext';
import { createTheme, ThemeProvider } from '@mui/material';
import '@sweetalert2/theme-dark/dark.css';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#EA599C',//will be calculated from palette.primary.main,
      main: '#3A8EDD',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#838383',
      main: '#838383',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    success: {
      light: '#039B00',
      main: '#039B00',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Open Sans',
    button: {
      textTransform: 'none'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CartProvider>
            <Routes />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
