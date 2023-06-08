import { typeProduct } from "@/@types";
import axios from "axios";
import styles from '@/styles/Home.module.css'
import Head from "next/head";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import ShopProducts from "@/components/ShopProducts";



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
        <ShopProducts />
      </div>    </>
  );
};

export default shop;


