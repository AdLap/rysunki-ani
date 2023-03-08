import React, { useContext } from "react";
import { GalleryContext } from "../../../context/Gallery.context";
import Error from "../../global/Error";
import { GallerySectionStyled } from "../../global/Gallery.styled";

const Stone = () => {
    const { stonePics, error } = useContext(GalleryContext);

    return (
        <GallerySectionStyled>
            {
                stonePics.length ?
                    stonePics.map((pic, idx) => (
                        <div key={idx}>
                            <img src={pic.thumb} alt='obrazek na kamieniu' />
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

export default Stone;