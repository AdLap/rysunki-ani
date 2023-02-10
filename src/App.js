import React from "react";
import { GalleryProvider } from "./context/Gallery.context";
import { Switch, Route, useLocation } from "react-router";
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from './theme';
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import NavBar from "./components/navigation/NavBar";
import OnCanvas from "./components/galleries/onCanvas/OnCanvas";
import Sketch from "./components/galleries/Sketch/Sketch";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";


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
