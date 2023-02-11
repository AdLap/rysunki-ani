import styled from "styled-components";

export const Spinner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.spinnerBackgroundColor};
    z-index: 100;

    &::after {
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        border: 8px;
        border-top: dotted ${({ theme }) => theme.spinnerColor};
        border-radius: 50%;
        animation: spinner 2s linear infinite;
        z-index: 120;
    }

    @keyframes spinner {
        100% {
            transform: rotate(360deg);
        }
    }
`;