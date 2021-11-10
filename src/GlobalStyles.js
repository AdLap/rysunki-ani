import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 18px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    section {
        max-width: 1200px;
        width: 100%;
        padding: 0 1rem;
        margin: 0 auto;
        min-height: calc(100vh - 30vh - 100px - 40px);

            @media (min-width: 1024px) {
            padding: 0 0 2rem 0;
        }
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
`;
