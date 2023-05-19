import React, { useState, useEffect, createContext, useContext } from "react";

const defaultContext = {
    contenido: 0,
    explicacion: 0,
    atencion: 0,
    tiempo: 0,
    puntualidad: 0,
    objetivo: 0,
}

const FormContext = createContext(defaultContext);

export const FormProvider = ({ children }) => {

    const [values, setValues] = useState(defaultContext);

    const send = ({key, value}) => {
        setValues({...values, [key]: value});
    }

    return (
        <FormContext.Provider value={{ values, send }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext);