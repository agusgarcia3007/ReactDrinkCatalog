import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


//create context
export const CategoriesContext = createContext();

//provider
const Provider = (props) => {

    
    //state context
    const [categories, setCategories] = useState([]);


    //apiFetching
    useEffect(()=>{
        const apiFetch = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const resp = await axios(url);
            setCategories(resp.data.drinks);
        }
        apiFetch();
    },[])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default Provider;