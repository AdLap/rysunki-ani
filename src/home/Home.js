import React from "react";
import { StyledHomeSection, StyledMeDescription, StyledMePicture } from "./Home.styled";

const Home = () => {
    return (
        <StyledHomeSection>
            <StyledMePicture>
                <picture>

                </picture>

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
