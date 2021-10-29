import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';




export const RecipesContext = createContext();

const RecipesProvider = props => {

    const [recipe, setRecipe] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState({
        ingredients:'',
        category:'',
    });
    const [fetch, setFetch] = useState(false);

    const {ingredients, category } = searchRecipe;

    useEffect(()=>{
        if(fetch){
            const apiFetchR = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}&c=${category}`;
                const resp = await axios(url);
                setRecipe(resp.data.drinks);
            };

            apiFetchR();
            
        }
    },[searchRecipe, category, ingredients, fetch])
    

    return(
        <RecipesContext.Provider
            value={{
                recipe,
                setSearchRecipe,
                setFetch
            }}
         >
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider