import styled from "styled-components";

export const FormSection = styled.section`
    max-width: 100vw;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    padding-bottom: 0;
    background: ${({ theme }) => theme.whiteColor};
`;

export const FormStyled = styled.form`
    grid-column: 2 / 3;
    align-self: center;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 5px 7px 23px 5px ${({ theme }) => theme.darkColor};
`;

export const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const InputSubmit = styled.button`
    border-radius: 30px;
    padding: .5rem 1rem;
    position: relative;
    background: linear-gradient(to right, rgb(238, 162, 162) 0%, rgb(187, 193, 191) 19%, rgb(87, 198, 225) 42%, rgb(180, 159, 218) 79%, rgb(122, 197, 216) 100%);
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
`;