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

    .error {
        color: red;
        font-size: .8rem;
        line-height: 1.5em;
        color: ${({ theme }) => theme.errorColor};
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

    input, button {
        border: none;
        outline: none;
    }

    input, textarea {
        margin-top: .5rem;
        border-bottom: 1px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to right, rgb(238, 162, 162) 0%, rgb(187, 193, 191) 19%, rgb(87, 198, 225) 42%, rgb(180, 159, 218) 79%, rgb(122, 197, 216) 100%);    
    }
`;
