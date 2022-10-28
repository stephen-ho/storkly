import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import register from './register.js';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Storkly</title>
        <meta name='keywords' content='web-development, programming' />
      </Head>
      <Link href='/register'>
        <Button variant="contained" size="large">Start Here</Button>
      </Link>
    </div>
  )
}
