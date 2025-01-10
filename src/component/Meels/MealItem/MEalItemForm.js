import Input from '../../UI/Input';
import classes from './MealItemForm.module.css' ;
import React,{useContext} from 'react';
import CartContext from '../../../store/cart-context';


const MealItemForm=props=>{
    const ctx=useContext(CartContext);
    const addItem=(event)=>{
        event.preventDefault();
      const quantity=document.getElementById('amount'+props.meal.id).value;
     const mealItem={
        quantity:quantity,
           ...props.meal 

     }
        ctx.addItem(mealItem)
    };
    return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount'+props.meal.id,  
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button onClick={addItem} > + Add</button>
    </form>
    );
}

export default MealItemForm;
