import React, {useContext, useState} from 'react';
import  { ModalContext } from '../context/Modal';
import {nanoid} from 'nanoid'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({singleRecipe}) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const { recipe, setIdRecipe, setRecipe } = useContext(ModalContext);

    if(typeof(open) == undefined || open == null) return null;

    const showIngredients = recipe => {
        let ingredients = [];
        for(let i = 1; i < 10 ; i++){
            if( recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={nanoid()}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card border border-white rounded">
                <h2 className="card-header">{singleRecipe.strDrink}</h2>
                <img className='img-top' src={singleRecipe.strDrinkThumb} alt="recpiepicture" />
                <div className="card-body">
                    <button
                        type='button'
                        className='btn btn-block btn-danger'
                        onClick={() => {
                            setIdRecipe(singleRecipe.idDrink);
                            handleOpen();
                        }}
                    >How to Prepare</button>

                    <Modal
                        open={open}
                        onClose={()=>{
                            handleClose();
                            setRecipe({});
                            setIdRecipe(null);

                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipe.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>{recipe.strInstructions}</p>
                            <img className='img-fluid my-4' src={recipe.strDrinkThumb} alt="DrinkPic" />
                            <h3>Ingredients</h3>
                            <ul>
                                { showIngredients(recipe) }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Recipe;