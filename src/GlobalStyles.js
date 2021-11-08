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
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;