import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import Error from "../utility/Error";
import { SketchSection, SketchPicture } from './Sketch.styled';

const Sketch = () => {
    const { sketchPics, error } = useContext(GalleryContext);

    return (
        <SketchSection>
            {
                sketchPics.length ?
                    sketchPics.map((pic, idx) => (
                        <SketchPicture key={idx}>
                            <img src={pic.thumb} alt='szkic' />
                        </SketchPicture>
                    )) :
                    !error && <h3>loading...</h3>
            }
            {
                error && <Error error={error} />
            }
        </SketchSection>
    );
}

export default Sketch;
