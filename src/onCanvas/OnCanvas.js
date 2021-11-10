import React, { useContext } from "react";
import { GalleryContext } from "../context/Gallery.context";
import { GallerySectionStyled } from "../utility/Gallery.styled";
import Error from '../utility/Error';


const OnCanvas = () => {
    const { canvasPics, error } = useContext(GalleryContext);

    return (
        <GallerySectionStyled>
            {
                canvasPics.length ?
                    canvasPics.map((pic, idx) => (
                        <div key={idx}>
                            <img src={pic.thumb} alt='obrazek na płótnie' />
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

export default OnCanvas;
