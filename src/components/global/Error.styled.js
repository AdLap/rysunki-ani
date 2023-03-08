import styled from "styled-components";

export const ErrorStyled = styled.div`
    font-size: .8rem;
    line-height: 1.5em;
    color: ${({ theme }) => theme.errorColor};
    margin-bottom: -1.5em;
`;
