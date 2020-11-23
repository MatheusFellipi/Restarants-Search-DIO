import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset'
import store from './Redux/store'
import theme from './thema';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
