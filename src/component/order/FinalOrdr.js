import classes from "./Final.module.css";
import { useEffect } from "react";
const FinalOrder=()=>{
    const goBack=()=>{
        localStorage.removeItem("order")
    }
    
    return(
        <div className={classes.finalOrder}>
            <div>
            <h2 >Order have been placed successfully</h2>
            <div className={classes.image}>
            <img src={orderSuccess}   />
            
            </div>
            <div className={classes.button}>
                <button onClick={()=>{goBack()}} className={classes.btn}>Go back</button>
            </div>
            </div>
            
       
        
        </div>
    )
}
export default FinalOrder;