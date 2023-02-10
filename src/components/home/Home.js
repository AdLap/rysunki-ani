import React from "react";
import { StyledHomeSection, StyledMeDescription, StyledMePicture } from "./Home.styled";
import homePic from '../../assets/kot.jpg';

const Home = () => {
    return (
        <StyledHomeSection>
            <StyledMePicture>
                <img src={homePic} alt='Obraz kota' />
            </StyledMePicture>
            <StyledMeDescription>
                <h2>Cześć &#127912;</h2>
                <p>
                    Jestem młodą malarką i zapraszam do obejrzenia mojej galerii obrazków. <br />Jeśli zechcesz któryś kupić to napisz przez formularz kontaktowy.
                </p>
            </StyledMeDescription>
        </StyledHomeSection>
    );
}

export default Home;
