import React from 'react'
import { StatusProvider } from './context/Status.context'
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
import Sketch from './components/galleries/sketch/Sketch'
import Stone from './components/galleries/stone/Stone'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
	const location = useLocation()

	return (
		<StatusProvider>
			<GalleryProvider>
				<ThemeProvider theme={theme}>
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
						</Routes>
						<Contact />
					</AnimatePresence>
					<Footer />
				</ThemeProvider>
			</GalleryProvider>
		</StatusProvider>
	)
}

export default App
