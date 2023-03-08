import styled from "styled-components";

export const GallerySectionStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
    justify-content: center;
    gap: 2rem;

    div{
        max-width: 300px;
        width: 100%;
        max-height: 405px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        background: ${({ theme }) => theme.imagesBackground};

        img {
            width: 100%;
            height: auto;
        }
    }
`;