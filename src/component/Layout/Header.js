import React,{Fragment} from 'react';
import meelsimage from '../../assets/meels.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
  
     return <Fragment>
          <header className={classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton onClick={props.onShowCart} />
          </header>
          <div className={classes['main-image']}> 
            <img src={meelsimage} alt='A image is lost ' />
          </div>
     </Fragment>
}

export default Header;
