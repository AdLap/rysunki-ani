import styled from "styled-components";

export const StyledNavBar = styled.nav`
    height: 100px;
    width: 100%;

    div {
        max-width: ${({ theme }) => theme.mainContainer};
        width: 100%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    a {
        border: 1px solid transparent;
        text-transform: uppercase;
        text-align: center;

        &:hover {
            color: ${({ theme }) => theme.randomColor};
        }

        &:active {
            border: 1px solid green;
        }
    }
`;
