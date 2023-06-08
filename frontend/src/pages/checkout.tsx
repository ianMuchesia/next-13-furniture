import { useAppSelector } from '@/redux/hooks'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'



const checkout = () => {

    const total = useAppSelector(state=>state.cart.subTotal)
  return (
    <>
    <Head>
    <title>Next Js Ecommerce</title>
    <meta name="description" content="Shop By in Get COmfy Furnitures" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <div className={styles.main}>
   <h1>Hello Your Name </h1> 
    <p>Your Total is Ksh.{total.toLocaleString()}</p>

    <Image
    src='/Mpesa.png'
    alt='mpesa'
    height={200}
    width={300}/>
    <div className="checkout-container">
        <form action="">
            <input type="number" className='input-tel' placeholder='e.g 0700 000 000'/>
            <button className='checkout-btn'>Pay Now</button>
        </form>
    </div>

  </div>
  </>
  )
}

export default checkout