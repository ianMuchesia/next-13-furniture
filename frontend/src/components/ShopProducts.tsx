import { typeProduct } from '@/@types'
import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'


interface Props{
    products: typeProduct[]
}
const ShopProducts = ({products}:Props) => {
  return (
    <>
        <div className="shop-categorize">
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="search"
          />

          <div className="category">
            <h4>Category</h4>
            <ul>
              <li>Office</li>
              <li>Living Room</li>
              <li>Kitchen</li>
              <li>Bedroom</li>
              <li>Dining Room</li>
            </ul>
          </div>
          <div className="shop-price-container">
            <label htmlFor="price">Price</label>
            <input
              type="range"
              name="price"
              id="price"
              className="input-price"
            />
          </div>
          <button type="button" className="clear-btn">
            Clear Filters
          </button>
        </div>
        <div className="shop-container-products">
        <div className="shop-sort-bar">
          <div className="shop-sort-bar-left">
            <div className="shop-sort-layout">
              <GiHamburgerMenu />
              <BsGrid3X3GapFill />
            </div>
            <h4>22 Products </h4>
          </div>
          <div className="shop-sort-bar-right">
            <h4>Sort By</h4>
            <select name="sort" id="sort">
              <option>Price(Lowest)</option>
              <option>Price(Highest)</option>
              <option>Name(A-Z)</option>
              <option>Name(Z-A)</option>
            </select>
          </div>
        </div>

        <div className="shop-products">
              {
                products?.length> 1 ?(
                  products.map((product)=>(<div className="shop-products-card" key={product._id}>
                    <div className="shop-products-card-image">
                    <img src={product.imageUrl} alt={product.name} />
                    </div>
                  
                  <div className="shop-products-details">
                    <div className="">{product.name}</div>
                    <div className="">Ksh.{product.price}</div>
                  </div>
                  <div className="shop-products-btn">
                    Add to cart
                  </div>
                </div>))
                ):(<h1>No furniture available</h1>)
              }
        </div>
        </div>
    </>
  )
}

export default ShopProducts