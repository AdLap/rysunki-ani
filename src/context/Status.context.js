import React, { createContext, useState } from "react";

export const StatusContext = createContext();
const { Provider } = StatusContext;

export const StatusProvider = ({ children }) => {
    const [success, setSuccess] = useState([]);
    const [error, setError] = useState(false);

    return (
        <Provider value={{
            success, setSuccess,
            error, setError
        }}
        >
            {children}
        </Provider>
    );
}

// TODO