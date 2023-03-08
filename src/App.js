import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GalleryProvider } from './context/Gallery.context'
import { Routes, Route, useLocation } from 'react-router'
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyle } from './GlobalStyles'
import { theme } from './theme'
import Home from './components/home/Home'
import Header from './components/header/Header'
import NavBar from './components/navigation/NavBar'
import OnCanvas from './components/galleries/onCanvas/OnCanvas'
import Sketch from './components/galleries/Sketch/Sketch'
import Stone from './components/galleries/stone/Stone'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
	const location = useLocation()

	return (
		<HelmetProvider>
			<GalleryProvider>
				<ThemeProvider theme={theme}>
					<Helmet>
						<title>Galeria obrazków Ani</title>
						<link
							rel='stylesheet'
							href='<link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">'
						/>
					</Helmet>
					<Normalize />
					<GlobalStyle />
					<Header />
					<NavBar />
					<AnimatePresence>
						<Routes location={location} key={location.key}>
							<Route path='/' element={<Home />} />
							<Route path='/plotna' element={<OnCanvas />} />
							<Route path='/szkice' element={<Sketch />} />
							<Route path='/kamienie' element={<Stone />} />
							<Route path='/kontakt' element={<Contact />} />
						</Routes>
					</AnimatePresence>
					<Footer />
				</ThemeProvider>
			</GalleryProvider>
		</HelmetProvider>
	)
}

export default App
