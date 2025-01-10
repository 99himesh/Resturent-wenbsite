import React, { useState } from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [orders,setOrder]=useState([])
  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex((itm) => (itm.id === item.id));
    const existingCartItem = items[existingCartItemIndex];
    let updatedItemsList = [...items];
    if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            quantity: Number(existingCartItem.quantity) + 1
        }
        updatedItemsList[existingCartItemIndex] = updatedItem;
    } else {
        updatedItemsList = items.concat(item);
    }
    setItems(updatedItemsList);
};
  
    const removeItemToCardHAndler = (id) => {
    const existingCartItemIndex = items.findIndex((itm) => itm.id === id);
    const existingCartItem = items[existingCartItemIndex];
    let updatedItemsList = [...items];
  
     if (Number(existingCartItem.quantity) === 1) {
      updatedItemsList = updatedItemsList.filter((itm) => itm.id !== id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: Number(existingCartItem.quantity) - 1,
      };
 
      updatedItemsList[ existingCartItemIndex]=updatedItem;
    }
    setItems(updatedItemsList);
  };
  const removeItemAllHandler=()=>{
    setItems([])
  }
  const addOrderHandler=(item)=>{
    console.log(item);
    
    setOrder([...orders,item])
  }
  console.log(orders);
  


  const cartContext = {
    item: items,
    order:orders,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCardHAndler,
    removeAll: removeItemAllHandler,
    addorder:addOrderHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
