import React, { useContext } from 'react'
import { GalleryContext } from '../../../context/Gallery.context'
import Gallery from '../Gallery'

const OnCanvas = () => {
	const { canvasPics } = useContext(GalleryContext)

	return (
		<Gallery items={canvasPics} />
	)
}

export default OnCanvas
