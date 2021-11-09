import styled from "styled-components";

export const CanvasSection = styled.section`
    max-width: ${({ theme }) => theme.mainContainer};
    width: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
    justify-content: center;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.laptop}) {
        padding: 0;
    }
`;

export const Picture = styled.div`
    max-width: 300px;
    width: 100%;
    max-height: 405px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: auto;
    }
`;
