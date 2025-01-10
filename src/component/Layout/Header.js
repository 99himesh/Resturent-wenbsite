import React,{Fragment, useContext} from 'react';
import meelsimage from '../../assets/meels.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import CartContext from '../../store/cart-context';
const Header=props=>{
     const badgeOrder=useContext(CartContext)
    const badge=badgeOrder.order.length;
     const date=new Date()
     console.log(date.getMonth());
     const monthObj={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"July",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"}
  
     return <Fragment>
          <header className={classes.header}>
            <h1>ReactMeals</h1>
            <div className={classes.order}>
           <HeaderCartButton onClick={props.onShowCart} />
           <div> 
               <div>
          {badge>0 ?<marquee direction="left"  className={classes.btn}><span >Your  {badge} order deliver at  {JSON.parse(date.getDate())} {monthObj[JSON.parse(date.getMonth()+1)]} {JSON.parse(date.getFullYear())}  till 9:00 PM .Thankyou for Order . </span></marquee>:(<marquee direction="left" className={classes.btn}>Please place Order .</marquee>)}

                    </div> 
           </div>
           </div>
          </header>
          <div className={classes['main-image']}> 
            <img src={meelsimage} alt='A image is lost ' />
          </div>
     </Fragment>
}

export default Header;




