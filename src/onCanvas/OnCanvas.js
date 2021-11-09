import React, { useEffect, useState } from "react";
import { CanvasSection, Picture } from "./OnCanvas.styled";
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const OnCanvas = () => {
    const [pics, setPics] = useState([]);
    const picsRef = collection(db, 'canvas');

    useEffect(() => {
        const getPics = async () => {
            const data = await getDocs(picsRef);
            setPics(data.docs.map((doc) => ({ ...doc.data() })))
        }

        getPics();
    }, [])

    return (
        <CanvasSection>
            {
                pics.map((pic, idx) => (
                    <Picture>
                        <img src={pic.thumb} alt='obrazek na płótnie' key={idx} />
                    </Picture>
                ))
            }
        </CanvasSection>
    );
}

export default OnCanvas;
