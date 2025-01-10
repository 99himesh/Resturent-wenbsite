import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const removeItem=(id)=>{
    ctx.removeItem(id)
  };
  
  const addItem=(item)=>{
    ctx.addItem(item)
  };
  const cartItem = ctx.item.map((item) => <CartItem key={item.id} onAdd={addItem.bind(null,item)} onRemove={removeItem.bind(null,item.id)} name= {item.name}  price={item.price} quantity={item.quantity} />);
  let  totalAmount=0;
   ctx.item.forEach((item)=>{
    console.log(item);
    
    totalAmount=totalAmount+item.price*item.quantity;
   })



  return (
    <Modal  onClose={props.onClose}>
    <div >

      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {ctx.item.length>0 && <button className={classes.button}  >order</button>}
      </div>
    </div>

    </Modal>

  );
};

export default Cart;
