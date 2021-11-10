import React, { createContext, useEffect, useState } from "react";
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const GalleryContext = createContext();
const { Provider } = GalleryContext;

export const GalleryProvider = ({ children }) => {
    const [canvasPics, setCanvasPics] = useState([]);
    const [sketchPics, setSketchPics] = useState([]);
    const [error, setError] = useState(false);

    const canvasPicsRef = collection(db, 'canvas');
    const sketchPicsRef = collection(db, 'sketch');

    const getPics = async () => {

        try {
            const dataCanvas = await getDocs(canvasPicsRef);
            setCanvasPics(dataCanvas.docs.map((doc) => ({ ...doc.data() })));
            const dataSketch = await getDocs(sketchPicsRef);
            setSketchPics(dataSketch.docs.map((doc) => ({ ...doc.data() })));
        } catch (err) {
            console.log(err)
            setError(err)
        }
    };

    useEffect(() => {
        const abortGetPics = new AbortController();

        getPics();

        return () => abortGetPics.abort();
    }, []);

    return (
        <Provider value={{
            canvasPics, setCanvasPics,
            sketchPics, setSketchPics,
            error, setError
        }}
        >
            {children}
        </Provider>
    );
}
