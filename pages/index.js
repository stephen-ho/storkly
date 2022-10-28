import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Register from './register.js';
import React, { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storkly</title>
        <meta name='keywords' content='web-development, programming' />
      </Head>
      {/* <h1>Storkly</h1> */}
    </div>
  )
}
