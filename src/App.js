import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Layout/Header";
import Meals from "./component/Meels/Meals";
import Cart from "./component/Cart/cart";
import CartProvider from "./store/Cartprovider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  const ordershow=()=>{
    return <h1>1332123</h1>
}

  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={HideCartHandler}   />}
       <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
   </CartProvider>
  );
}

export default App;
