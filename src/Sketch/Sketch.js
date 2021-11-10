import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import { GallerySectionStyled } from "../utility/Gallery.styled";
import Error from "../utility/Error";

const Sketch = () => {
    const { sketchPics, error } = useContext(GalleryContext);

    return (
        <GallerySectionStyled>
            {
                sketchPics.length ?
                    sketchPics.map((pic, idx) => (
                        <div key={idx}>
                            <img src={pic.thumb} alt='szkic' />
                        </div>
                    )) :
                    !error && <h3>loading...</h3>
            }
            {
                error && <Error error={error} />
            }
        </GallerySectionStyled>
    );
}

export default Sketch;
