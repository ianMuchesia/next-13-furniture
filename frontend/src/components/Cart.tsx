import { addToCart, removeItemFromCart, removeSingleItemFromCart, setShowCart } from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import React, {useRef} from 'react'
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'

const Cart = () => {
    const cartRef = useRef<HTMLDivElement>(null);

    const  dispatch = useAppDispatch()

    const cartItems = useAppSelector(state => state.cart)
      return (
    <div className="cart-wrapper" ref={cartRef}>
    <div className="cart-container">
      <button
      type="button"
      className="cart-heading"
      onClick={() =>dispatch(setShowCart(false))}
     >
        <AiOutlineLeft />
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">({cartItems.itemsList.length} items)</span>
      </button>

      {cartItems.itemsList.length < 1 && (
        <div className="empty-cart">
          <AiOutlineShopping size={150} />
          <h3>Your shopping bag is empty</h3>
          <Link href="/">
            <button
              type="button"
              onClick={() => dispatch(setShowCart(false))}
              className="btn"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
 
       <div className="product-container">
        {cartItems.itemsList.length >= 1 && cartItems.itemsList.map((item) => (
          <div className="product" key={item._id}>
            <img src={item?.imageUrl} className="cart-product-image" />
            <div className="item-desc">
              <div className="flex top">
                <h5>{item.name.slice(0,10)}</h5>
                <h4>Ksh. {item.price.toLocaleString()}</h4>
              </div>
              <div className="flex top">
                <h5>Qty X {item.quantity}</h5>
                <h4>{item.totalPrice.toLocaleString()}</h4>
              </div>
              <div className="flex bottom">
                <div>
                <p className="quantity-desc">
                  <span className="minus" onClick={() => dispatch(removeSingleItemFromCart(item._id)) }>
                  <AiOutlineMinus />
                  </span>
                  <span className="num">{item.quantity}</span>
                  <span className="plus" onClick={() => dispatch(addToCart(item)) }><AiOutlinePlus /></span>
                </p>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={() => dispatch(removeItemFromCart(item._id))}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.itemsList.length >= 1 && (
        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>Ksh. {cartItems.subTotal.toLocaleString()}</h3>
          </div>
          <div className="btn-container">
            <button type="button" className="btn">
              CHECKOUT
            </button>
          </div>
        </div>
      )} 
    </div>
  </div>
  )
}

export default Cart