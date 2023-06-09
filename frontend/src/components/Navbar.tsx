import Link from "next/link"
import {AiOutlineClose, AiOutlineShopping} from 'react-icons/ai'
import {BiUserPlus} from 'react-icons/bi'
import Cart from "./Cart"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setShowCart } from "@/redux/features/cartSlice"

const Navbar = () => {

  const cartItems = useAppSelector(state=>state.cart)

  const dispatch = useAppDispatch()
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Get Comfy Furnitures</Link>
      </p>
      <nav className="">
        <div className="dropdown-title">
        <p className="logo">
        <Link href="/">Get Comfy Furnitures</Link>
      </p>
      <AiOutlineClose/>
        </div>
      <ul>
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