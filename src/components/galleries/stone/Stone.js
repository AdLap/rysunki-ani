import React, { useContext } from 'react'
import { GalleryContext } from '../../../context/Gallery.context'
import Gallery from '../Gallery'

const Stone = () => {
	const { stonePics } = useContext(GalleryContext)

	return (
		<Gallery items={stonePics}/>
	)
}

export default Stone
