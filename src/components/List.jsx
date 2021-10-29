import React, {useContext} from 'react';

import Recipe from './Recipe';

import { RecipesContext } from '../context/Recipes';

const List = () => {


    //get recipes
    const { recipe } = useContext(RecipesContext)

    return ( 
        <div className="row mt-5">
            {recipe.map( singleRecipe => (
                <Recipe key={singleRecipe.idDrink} singleRecipe={singleRecipe} />
            ))}
        </div>
     );
}
 
export default List;