import Link from "next/link"
import {AiOutlineShopping} from 'react-icons/ai'
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
      <ul>
        <li className="logo"> <Link href="/">Home</Link></li>
        <li className="logo"> <Link href="/shop">Shop</Link></li>
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