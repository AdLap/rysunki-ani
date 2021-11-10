import React from "react";
import { GalleryProvider } from "./context/Gallery.context";
import { Switch, Route, useLocation } from "react-router";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from './theme';
import Home from "./home/Home";
import Header from "./header/Header";
import NavBar from "./navigation/NavBar";
import OnCanvas from "./onCanvas/OnCanvas";
import Sketch from "./Sketch/Sketch";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";


const App = () => {
  const location = useLocation();

  return (
    <GalleryProvider>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Header />
        <NavBar />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path='/' component={Home} />
            <Route path='/na-plotnie' component={OnCanvas} />
            <Route path='/szkice' component={Sketch} />
            <Route path='/kontakt' component={Contact} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </GalleryProvider>
  );
}

export default App;
