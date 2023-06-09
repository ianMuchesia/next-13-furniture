import Link from "next/link"
import {AiOutlineClose, AiOutlineLogout, AiOutlineMenu, AiOutlineShopping} from 'react-icons/ai'
import {BiUserPlus} from 'react-icons/bi'
import Cart from "./Cart"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setShowCart } from "@/redux/features/cartSlice"
import { useState } from "react"

const Navbar = () => {


  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state=>state.cart)

  const auth = useAppSelector(state=>state.auth.isAuthenticated)

  const [ toggle , setToggle]  = useState(false)


  return (
    <div className="navbar-container">
      <div className="top-bar">
      <p className="logo">
        <Link href="/">Get Comfy Furnitures</Link>
      </p>
      <AiOutlineMenu size={30} className="close-icon"  onClick={()=>setToggle(true)}/>
      </div>
    
      <nav className={`${toggle?"":"hide-bar"}`}>
        <div className="dropdown-title">
        <p className="logo">
        <Link href="/">Get Comfy Furnitures</Link>
      </p>
      <AiOutlineClose size={30} className="close-icon" onClick={()=>setToggle(false)}/>
        </div>
      <ul className="navLinks">
        <li className="nav-link"><Link href="/">Home</Link></li>
        <li className="nav-link"><Link href="/">Shop</Link></li>
        <li className="nav-link"><Link href="/">Checkout</Link></li>
       {!auth?  <li className="nav-link"><Link href="/"><BiUserPlus/><span> Login</span></Link></li>: <li className="nav-link">Logout<AiOutlineLogout/></li>}
        <li>
      <button type="button" className="cart-icon"  onClick={() => dispatch(setShowCart(true))}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{cartItems.totalQuantity}</span>
      </button></li>
      </ul>
     
{cartItems.showCart && <Cart />}
</nav>
    </div>
  )
}

export default Navbar