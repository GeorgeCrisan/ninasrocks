import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './muitheme/theme';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>

      <CssBaseline />
      <App />

    </BrowserRouter>
  </ThemeProvider>, document.getElementById('root')
);
