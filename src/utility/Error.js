import React from 'react';
import { ErrorStyled } from './Error.styled';

const Error = ({ error }) => {

    return (
        <ErrorStyled>
            {error.message}
        </ErrorStyled>

    );
}

export default Error;