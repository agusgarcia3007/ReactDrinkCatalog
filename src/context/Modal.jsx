import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';


//create context
export const ModalContext = createContext();

const ModalProvider = props => {


    //provider state 
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipe, setRecipe] = useState({});

    //if have an id fetch api
    useEffect(()=>{
        const apiFetch = async () => {
            if(!idRecipe)return ;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const resp = await axios(url);
            setRecipe(resp.data.drinks[0]);

        }
        apiFetch();
    },[idRecipe])


    return(
        <ModalContext.Provider
            value={{
                recipe,
                setRecipe,
                setIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider
