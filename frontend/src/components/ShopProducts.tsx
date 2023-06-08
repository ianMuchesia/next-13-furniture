import { typeProduct } from "@/@types";
import { useGetAllProductsQuery } from "@/redux/services/Api";
import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const ShopProducts = () => {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const [category, setCategory] = useState("");

  const [selectedRange, setSelectedRange] = useState<number>(0);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const { data, isLoading } = useGetAllProductsQuery({
    search,
    sort,
    category,
    numericFilters: `price>${selectedRange}`,
  });

  const products: typeProduct[] = data?.products;

  const handleClearFilters = () => {
    setSearch("");
    setCategory("");
    setSelectedRange(0);
    setSort("");
  };

  console.log(isLoading)

  return (
    <>
      <div className="shop-categorize">
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          value={search}
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category">
          <h4>Category</h4>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  value="Office"
                  checked={category === "Office"}
                  onChange={handleCategoryChange}
                />
                Office
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="Living Room"
                  checked={category === "Living Room"}
                  onChange={handleCategoryChange}
                />
                Living Room
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="Kitchen"
                  checked={category === "Kitchen"}
                  onChange={handleCategoryChange}
                />
                Kitchen
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="Bedroom"
                  checked={category === "Bedroom"}
                  onChange={handleCategoryChange}
                />
                Bedroom
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value="Dining Room"
                  checked={category === "Dining Room"}
                  onChange={handleCategoryChange}
                />
                Dining Room
              </label>
            </li>
          </ul>
        </div>
        <div className="shop-price-container">
          <label htmlFor="price">Price</label>
          <input
            type="range"
            name="price"
            min={1000}
            max={100000}
            id="price"
            value={selectedRange}
            onChange={(e) => setSelectedRange(parseInt(e.target.value, 10))}
            className="input-price"
          />
          <p>Selected Range: {selectedRange}</p>
        </div>
        <button
          type="button"
          className="clear-btn"
          onClick={handleClearFilters}
        >
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
            <h4>{products?.length} products found </h4>
          </div>
          <div className="shop-sort-bar-right">
            <h4>Sort By</h4>
            <select
              name="sort"
              id="sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="name">Name(A-Z)</option>
              <option value="-name">Name(Z-A)</option>
              <option value="price">Price(Lowest)</option>
              <option value="-price">Price(Highest)</option>
            </select>
          </div>
        </div>

        <div className="shop-products">
            {isLoading && <h1>Loading...</h1>}
            {products?.length === 0 && <h1>No products found</h1>}
          {products?.length > 0 &&
            products.map((product) => (
              <div className="shop-products-card" key={product._id}>
                <div className="shop-products-card-image">
                  <img src={product.imageUrl} alt={product.name} />
                </div>

                <div className="shop-products-details">
                  <div className="">{product.name}</div>
                  <div className="">Ksh.{product.price.toLocaleString()}</div>
                </div>
                <div className="shop-products-btn">Add to cart</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
