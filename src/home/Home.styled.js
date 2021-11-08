import styled from "styled-components";

export const StyledHomeSection = styled.section`
    border: 1px solid red;
    max-width: ${({ theme }) => theme.mainContainer};
    min-height: calc(100vh - 500px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

export const StyledMePicture = styled.div`
    border: 1px solid pink;
`;

export const StyledMeDescription = styled.div`
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h2 {
        text-align: center;
    }

    p {
        text-align: center;
    }

`;