import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import LoginForm from '@/components/LoginForm'

const login = () => {
  return (
    <>
    <Head>
    <title>Next Js Ecommerce</title>
    <meta name="description" content="Shop By in Get COmfy Furnitures" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
 
    <div className={styles.main}>
    <LoginForm/>
   </div>
   </>
  )
}

export default login