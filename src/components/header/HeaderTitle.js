import React, { useEffect, useState } from "react";
import { TitleAge, TitleMain } from "./HeaderTitle.styled";

const HeaderTitle = () => {
    const [colorChange, setColorChange] = useState(0);
    const title = 'Rysunki Ani';
    const age = '8 lat'

    useEffect(() => {
        const colorInterval = setInterval(() => {
            setColorChange(prev => prev + 1)
        }, 1000)

        return () => clearInterval(colorInterval);
    }, [])

    return (
        <TitleMain>
            {
                title.split('').map((letter, idx) => (
                    <span
                        key={`${letter}-${idx}`}
                        style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
                    >
                        {letter}
                    </span>
                ))
            }
            <TitleAge>
                {
                    age.split('').map((letter, idx) => (
                        <span
                            key={`${letter}-${idx}`}
                            style={{ color: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}
                        >
                            {letter}
                        </span>
                    ))
                }
            </TitleAge>
        </TitleMain>
    );
}

export default HeaderTitle;