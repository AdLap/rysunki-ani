import styled from "styled-components";

export const SuccessStyled = styled.div`
    color: ${({ theme }) => theme.successColor};
    background: ${({ theme }) => theme.spinnerBackgroundColor};
    font-size: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;