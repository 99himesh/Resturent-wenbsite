import React,{useContext} from "react";
import cartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton= props=>{
   
  const cartCntxt=useContext(cartContext);
  let quantity=0;
   cartCntxt.item.forEach((item)=>{
      quantity=quantity+(+item.quantity);
   });
      return <button  className={classes.button} onClick={props.onClick}>
        <span className={classes.Icon} >
          <CartIcon />
        </span>
        <span >Your cart</span>
        <span>{cartCntxt.message}</span>
        <span className={classes.badge}>
          {quantity}
        </span>

      </button>
}

export default HeaderCartButton;