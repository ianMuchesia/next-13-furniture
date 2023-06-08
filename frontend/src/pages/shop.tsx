import { typeProduct } from "@/@types";
import axios from "axios";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import ShopProducts from "@/components/ShopProducts";


interface Props{
  products: typeProduct[];
  error:string;
}
const shop = ({products, error}:Props) => {

  if(error){
    return <h1>Something wrong happened, please check your connection</h1>
  }


  return (
    <>
      <Head>
        <title>Next Js Ecommerce</title>
        <meta name="description" content="Shop By in Get COmfy Furnitures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className="shop-container">
        <ShopProducts products={products}/>
      </div>    </>
  );
};

export default shop;


export const getServerSideProps = async() => {
  try {
    const {data} = await axios.get(`${process.env.baseURL}products`);

    const {products} = data
    return{
      props: {products}
    }
  } catch (error) {
    return {
      props: {error: 'Failed to fetch Products'}
    }
  }
}
