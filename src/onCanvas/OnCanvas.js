import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import { CanvasSection, Picture } from "./OnCanvas.styled";
import Error from '../utility/Error';


const OnCanvas = () => {
    const { canvasPics, error } = useContext(GalleryContext);

    return (
        <CanvasSection>
            {
                canvasPics.length ?
                    canvasPics.map((pic, idx) => (
                        <Picture key={idx}>
                            <img src={pic.thumb} alt='obrazek na płótnie' />
                        </Picture>
                    )) :
                    !error && <h3>loading...</h3>
            }
            {
                error && <Error error={error} />
            }
        </CanvasSection>
    );
}

export default OnCanvas;
