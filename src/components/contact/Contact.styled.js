import styled from "styled-components";
import { MessageRoundedDetail } from '@styled-icons/boxicons-regular'

export const OpenButton = styled.button`
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: transparent;
`
export const StyledContactIcon = styled(MessageRoundedDetail)`
    color: ${({ theme }) => theme.contactButtonColor};

    &:hover {
        color: ${({ theme }) => theme.contactButtonHover};
    }
`

export const ContactPopup = styled.section`
    width: 100vw;
    max-width: none;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.contactPopupBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormStyled = styled.form`
    padding: 2rem;
    border-radius: 5px;
    width: 100%;
    background: ${({ theme }) => theme.whiteColor};
    box-shadow: 5px 7px 23px 5px ${({ theme }) => theme.contactPopupShadow};

    @media (${({ theme }) => theme.screenMd}) {
        max-width: 500px;
    }
`;

export const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1.5em;
`;

export const InputSubmit = styled.button`
    border-radius: 30px;
    padding: .5rem 1rem;
    position: relative;
    min-width: 90px;
    background: ${({ theme }) => theme.contactGradient};
    cursor: pointer;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        background: ${({ theme }) => theme.whiteColor};
        border-radius: 29px;
        z-index: -1;
    }

    &:hover {
        font-weight: 700;
    }
`;