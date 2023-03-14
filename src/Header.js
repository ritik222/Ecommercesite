// import React, { userState } from 'react'
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { SportsBasketball } from "@mui/icons-material";
import {useStateValue} from './StateProvider';
function Header() {
   const [{basket}] = useStateValue();
   console.log(basket);
  return (
    <>
   <nav className="header">
{/* logo on left side on navbar*/}
<Link to ="/">
<img className="header__logo" 
 src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png" 
 alt="" />
</Link>

{/* search box*/}
<div className="header_search">
<input type="text" className="header__searchInput" />
<SearchIcon className = "header__searchIcon"/>
</div>
{/*three links*/}
<div className="header_nav">
    <Link to = "/Login" className="header__link">
     <div className="header__option">
        <span className="header__optionLineOne">Hello Ritik</span>
        <span className="header__optionLineTwo">Sign in</span>
     </div>
    </Link>

    <Link to = "/" className="header__link">
     <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
     </div>
    </Link>

    <Link to = "/" className="header__link">
     <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
     </div>
    </Link>


    <Link to='/Checkout' className="header__link">
    <div className="header__optionBasket">
    <ShoppingBasketIcon/>
        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
    </div>
    </Link>
</div>


   </nav>
   {/* <h1>Home page</h1> */}
   
   </>

  )
}


export {Header} 
