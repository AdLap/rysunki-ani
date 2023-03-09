import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    height: 40px;
    padding-top: 2rem;
    font-size: .8rem;
`;

export const FooterContainer = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.mainContainer};
    margin: 0 auto;
    text-align: center;
    line-height: 40px;

    a {
        color: ${({ theme }) => theme.adLapColor};
    }
`;
