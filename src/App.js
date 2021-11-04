import React from "react";
import { Switch, Route, useLocation } from "react-router";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from './theme';
import Home from "./home/Home";
import Header from "./header/Header";
import NavBar from "./navigation/NavBar";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <NavBar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
