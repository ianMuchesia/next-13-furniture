import Head from "next/head";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const shop = () => {
  return (
    <>
      <Head>
        <title>Next Js Ecommerce</title>
        <meta name="description" content="Shop By in Get COmfy Furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="shop-container">
        <div className="shop-categorize">
          <input type="search" name="search" id="search" className="search" placeholder="search" />

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
          <input type="range" name="price" id="price" className="input-price" />
          </div>
          <button type="button" className="clear-btn">
            Clear Filters
          </button>
        </div>

        <div className="">
          <div className="">
            <GiHamburgerMenu />
            <BsGrid3X3GapFill />

            <h4>22 Products </h4>
          </div>
          <div className="">
            <h4>Sort By</h4>
            <select name="sort" id="sort">
              <option>Price(Lowest)</option>
              <option>Price(Highest)</option>
              <option>Name(A-Z)</option>
              <option>Name(Z-A)</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default shop;
