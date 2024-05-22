import React,{useState} from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { TbShoppingCartSearch } from "react-icons/tb";

const Header = ({cart}) => {
   const [openCart,setOpenCart]=useState(false)
 
  return (

    <header>
      <div>
        <h3>Mobile Shop</h3>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <div>
        <div className="cartimg">
          <NavLink to='/carts'>
            <TbShoppingCartSearch />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
