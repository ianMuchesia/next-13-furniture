

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import axios from "axios"
import { typeProduct } from '@/@types';
import { useState } from 'react';
import { GetStaticPropsContext } from 'next';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Product from '@/components/Product';
import { addToCart, removeSingleItemFromCart } from '@/redux/features/cartSlice';

interface Props {
  product:typeProduct;
  products:typeProduct[];
}
interface ResponseDataAllProducts {
  success: boolean;
  products: typeProduct[];
}

interface ResponseDataSingleProduct{
  success:boolean;
  product: typeProduct;
}


const ProductDetails = ({ product, products }:Props) => {
    const { imageUrl, name, description, price } = product;
    const [index, setIndex] = useState(0);
 
    const dispatch = useAppDispatch()

    const cart = useAppSelector(state=>state.cart)
    
  
    const cartItem = cart.itemsList.find(item=>item._id === product._id)
    return (
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img src={imageUrl} className="product-detail-image" />
            </div>
            {/* <div className="small-images-container">
              {images?.map((item, i) => (
                <img 
                  key={i}
                  src={item}
                  className={i === index ? 'small-image selected-image' : 'small-image'}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div> */}
          </div>
  
          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>
                (20)
              </p>
            </div>
            <h4>Details: </h4>
            <p>{description}</p>
            <p className="price">${price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={()=>dispatch(removeSingleItemFromCart(product._id))}><AiOutlineMinus /></span>
                <span className="num">{cartItem?.quantity || 0}</span>
                <span className="plus"  onClick={()=>dispatch(addToCart(product))}><AiOutlinePlus /></span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart"  onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
              <button type="button" className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
  
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {products.map((item) => (
                  <Product key={item._id} product={item} />
                ))}
              </div>
            </div>
        </div>
      </div>
    )
  }




  export const getStaticPaths = async()=>{
    const {data} = await axios.get<ResponseDataAllProducts>('http://localhost:3000/api/v1/products')

    const {products } = data
    const paths = products.map(product=>({
      params:{
        id:product._id
      }
    }))

    return {
      paths,
      fallback: 'blocking'
    }
  }

  



  export const getStaticProps = async(context: GetStaticPropsContext)=>{
    const { params } = context;
    const { id } = params as { id: string };
    const {data:product} = await axios.get<ResponseDataSingleProduct>(`http://localhost:3000/api/v1/products/${id}`)


    const { data:AllProducts} = await axios.get<ResponseDataAllProducts>('http://localhost:3000/api/v1/products')

    const {products} = AllProducts

    return{
      props: {product , products}
    }
  }


  export default ProductDetails