import React, {  useContext, useState } from 'react';
import { CategoriesContext } from '../context/Categories';
import { RecipesContext } from '../context/Recipes';

const Form = () => {

    const [searching, setSearching] = useState({
        ingredients:'',
        category:''
    });

    const { categories } =useContext(CategoriesContext);

    const { setSearchRecipe, setFetch } = useContext(RecipesContext);

    const getData = e => {
        setSearching({
            ...searching,
            [e.target.name] : e.target.value
        })
    }
    

    return ( 

        <form
            className='col-12'
            onSubmit={ e => {
                e.preventDefault();
                setSearchRecipe(searching);
                setFetch(true);
            }}
        >
            <fieldset className='text-center'>
                <legend>Choose Your Favourites ingredients</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name='ingredients'
                        className='form-control mb-2'
                        type='text'
                        placeholder='ingredients'
                        onBlur={getData}
                    />
                </div>
                <div className="col-md-4">
                    <select className='form-control mb-2' name='category' onBlur={getData}>
                        <option value="">-Choose Category-</option>
                        {categories.map( x => (
                            <option key={x.strCategory} value={x.strCategory} >
                                {x.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className='btn btn-block btn-danger'/>
                </div>
            </div>
        </form>
     );
}
 
export default Form;