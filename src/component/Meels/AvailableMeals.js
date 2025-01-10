 
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS=[
 {
    id:'m1',
    name:'Pizza',
    description:'4 big slices',
    price:100
 },
 {
    id:'m2',
    name:'Burger',
    description:'One burger with free coldreen ',
    price:50
 },
 {
    id:'m3',
    name:'Momos',
    description:'Twelve pieces',
    price:55
 },

]


const AvailableMeals=()=>{
   const mealList=DUMMY_MEALS.map(meal=>(
       <MealItem
        key={meal.id}
      //  name={meal.name} 
      //  description={meal.description}
      //  price={meal.price}
       meal={meal}
       />
       ));
    return <section className={classes.meals}>
        
        <Card>
        <ul>{mealList}</ul>
        </Card>
    </section>

}
export default AvailableMeals;