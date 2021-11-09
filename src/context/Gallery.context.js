import React, { createContext, useEffect, useState } from "react";
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const GalleryContext = createContext();
const { Provider } = GalleryContext;

export const GalleryProvider = ({ children }) => {
    const [canvasPics, setCanvasPics] = useState([]);
    const [sketchPics, setSketchPics] = useState([]);
    const [error, setError] = useState('');

    const canvasPicsRef = collection(db, 'canvas');
    const sketchPicsRef = collection(db, 'sketch');

    const getCanvasPics = async () => {
        const data = await getDocs(canvasPicsRef);
        setCanvasPics(data.docs.map((doc) => ({ ...doc.data() })));
    }

    const getSketchPics = async () => {
        const data = await getDocs(sketchPicsRef);
        setSketchPics(data.docs.map((doc) => ({ ...doc.data() })));
    }

    useEffect(() => {
        try {
            getCanvasPics();
            getSketchPics();
        } catch (err) {
            setError(err.message)
        }

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
