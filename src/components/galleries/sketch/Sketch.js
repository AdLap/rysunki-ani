import React, { useContext } from 'react'
import { GalleryContext } from '../../../context/Gallery.context'
import Gallery from '../Gallery'

const Sketch = () => {
	const { sketchPics } = useContext(GalleryContext)

	return (
		<Gallery items={sketchPics} />
	)
}

export default Sketch
