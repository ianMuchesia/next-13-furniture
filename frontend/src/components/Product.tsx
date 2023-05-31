import { typeProduct } from "@/@types";
import Link from "next/link";
import React from "react";

interface Props {
  product: typeProduct;
}
const Product = ({ product }: Props) => {
  return (
    <div>
      <Link href={`/product/${product._id}`}>
        {" "}
        <div className="product-card">
          <img
            src={product.imageUrl}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
