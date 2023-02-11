import React from "react";
import { FooterContainer, FooterStyled } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <a href='https://adlap-9b9e8.web.app/' title='AdLap' target='_blank' rel="noreferrer">{`< AdLap /> `}</a>
                <span>&copy; 2021</span>
            </FooterContainer>
        </FooterStyled>
    );
}

export default Footer;