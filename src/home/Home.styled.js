import styled from "styled-components";

export const StyledHomeSection = styled.section`
    max-width: ${({ theme }) => theme.mainContainer};
    display: grid;
    gap: 1rem;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.tablet}) {
        grid-template-columns: repeat(2, 50%);
    }

    @media (minn-width: ${({ theme }) => theme.desktop}) {
        padding: 0 0 2rem 0;
    }
`;

export const StyledMePicture = styled.div`

    img {
        width: 100%;
        height: auto;
    }
`;

export const StyledMeDescription = styled.div`
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

        @media (min-width: ${({ theme }) => theme.tablet}) {
           padding: 0 1em; 
        }
    }
`;
