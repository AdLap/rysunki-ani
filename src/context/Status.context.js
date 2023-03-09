import React, { createContext, useState } from 'react'

export const StatusContext = createContext()
const { Provider } = StatusContext

export const StatusProvider = ({ children }) => {
	const [success, setSuccess] = useState([])
	const [error, setError] = useState(false)
	const [openModal, setOpenModal] = useState(false)

	const handleModal = () => {
		const body = document.querySelector('body')
		setOpenModal((state) => !state)
		body.style.overflowY = !openModal ? 'hidden' : 'scroll'
	}

	return (
		<Provider
			value={{
				success,
				setSuccess,
				error,
				setError,
				openModal,
				handleModal,
			}}
		>
			{children}
		</Provider>
	)
}
