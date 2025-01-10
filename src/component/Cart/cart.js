import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./cart.module.css";
import orderClasses from "../order/Final.module.css";
import orderSuccess from "../../assets/check.avif"
import CartItem from "./CartItem";
import CartProvider from "../../store/Cartprovider";
import pizza from "../../assets/pizza.jpg"
import momos from "../../assets/momos.jpg"
import burger from "../../assets/burger.webp"
const Cart = (props) => {
  const ctx = useContext(CartContext);
  // const order=JSON.stringify(localStorage.getItem("order"))
  const [orderKey, setOrderKey] = useState(0)
  const removeItem = (id) => {
    ctx.removeItem(id)
  };

  const addItem = (item) => {
    ctx.addItem(item)
  };
  const cartItem = ctx.item.map((item) => <CartItem key={item.id} onAdd={addItem.bind(null, item)} onRemove={removeItem.bind(null, item.id)} name={item.name} price={item.price} quantity={item.quantity} />);
  let totalAmount = 0;
  ctx.item.forEach((item) => {
    console.log(item);

    totalAmount = totalAmount + item.price * item.quantity;
  })

  const orderPlaced = () => {
    setOrderKey(1)
    // localStorage.setItem("order",1)
  }

  const goBack = () => {
    setOrderKey(0)
    ctx.addorder([ctx.item])
    ctx.removeAll()

  }





  return (
    <CartProvider>
      <Modal onClose={props.onClose}>
        {orderKey === 0 ? (ctx.item.length === 0 ? (<div>
          <h3 className={classes.food}>Please add your favourite fast food to cart.I waiting to your order to deliver.</h3>
          <div className={classes.foodImage}>
            <img src={pizza}/>
            <img src={burger}/>
          </div>
          </div>) : (<div >

          {cartItem}
          <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              close
            </button>
            {ctx.item.length > 0 && <button className={classes.button} onClick={() => { orderPlaced() }}   >order</button>}
          </div>
        </div>)) : (<div className={orderClasses.finalOrder}>
          <div>
            <h2 >Order have been placed successfully</h2>
            <div className={orderClasses.image}>
              <img src={orderSuccess} />

            </div>
            <div className={orderClasses.button}>
              <button onClick={() => { goBack() }} className={orderClasses.btn}>Go back</button>
            </div>
          </div>



        </div>)}

      </Modal>
    </CartProvider>
  );
};

export default Cart;
