import React, {  useContext } from 'react';
import { CategoriesContext } from '../context/Categories';

const Form = () => {


    const { categories } =useContext(CategoriesContext);
    

    return ( 

        <form
            className='col-12'
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
                    />
                </div>
                <div className="col-md-4">
                    <select className='form-control mb-2' name='category'>
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