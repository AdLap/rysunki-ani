import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import { SketchSection, SketchPicture } from './Sketch.styled';

const Sketch = () => {
    const { sketchPics, error } = useContext(GalleryContext);

    return (
        <SketchSection>
            {
                sketchPics.map((pic, idx) => (
                    <SketchPicture key={idx}>
                        <img src={pic.thumb} alt='szkic' />
                    </SketchPicture>
                ))
            }
        </SketchSection>
    );
}

export default Sketch;
