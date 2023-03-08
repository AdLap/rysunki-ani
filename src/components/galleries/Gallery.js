import React, { useContext } from 'react'
import { GalleryContext } from '../../context/Gallery.context'
import Error from '../global/Error'
import { GallerySectionStyled } from '../global/Gallery.styled'

const Gallery = ({ items }) => {
	const { error } = useContext(GalleryContext)

	return (
		<GallerySectionStyled>
			{items.length
				? items.map((pic, idx) => (
						<div key={idx}>
							<img
								src={pic.thumb}
								alt={pic.category}
								width='300'
								height='405'
							/>
						</div>
				  ))
				: !error && <h3>loading...</h3>}
			{error && <Error error={error} />}
		</GallerySectionStyled>
	)
}

export default Gallery
