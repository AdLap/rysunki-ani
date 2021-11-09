import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import { CanvasSection, Picture } from "./OnCanvas.styled";


const OnCanvas = () => {
    const { canvasPics, error } = useContext(GalleryContext);

    return (
        <CanvasSection>
            {
                canvasPics.map((pic, idx) => (
                    <Picture key={idx}>
                        <img src={pic.thumb} alt='obrazek na płótnie' />
                    </Picture>
                ))
            }
        </CanvasSection>
    );
}

export default OnCanvas;
