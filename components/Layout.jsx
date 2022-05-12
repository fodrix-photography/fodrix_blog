import React from 'react'
import Head from 'next/head'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Head>
        <title>Fodrix blog</title>
        <link rel="icon" href="/fodrix-icon.png" />
      </Head>
      {children}
    </>
  )
}

export default Layout
