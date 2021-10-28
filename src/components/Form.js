import React, { useState, useEffect } from 'react'

const Form = () => {
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
                        className='form-control'
                        type='text'
                        placeholder='ingredients'
                    />
                </div>
                <div className="col-md-4">
                    <select className='form-control' name='category'>
                        <option value="">-Choose Category-</option>
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