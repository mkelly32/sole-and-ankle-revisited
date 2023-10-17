import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';
import { COLORS, WEIGHTS, QUERIES } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{COLORS, WEIGHTS, QUERIES}}>
        <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
