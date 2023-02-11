import React from "react";
import { SuccessStyled } from "./Success.styled";

const Success = ({ message }) => {

    return (
        <>
            <SuccessStyled>
                {message}
            </SuccessStyled>
        </>
    )
}

export default Success;
