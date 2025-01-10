import React from "react";

   const CartContext= React.createContext({
    item:[],
    orderData:null,
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    removeAll:()=>{},
    addorder:(item)=>{},
});

export default CartContext;