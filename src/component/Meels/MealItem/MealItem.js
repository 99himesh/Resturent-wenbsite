import classes from './MealItem.module.css';
import MealItemForm from '../MealItem/MEalItemForm';


const MealItem =props=>{
    const price=`$${props.meal.price.toFixed(2)}`;
      return <li className={classes.meal}>
           <div>
            <h3>{props.meal.name}</h3>
            <div className={classes.description}>{props.meal.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
               <MealItemForm meal={props.meal}/>
            </div>
      </li>
}

export default MealItem;