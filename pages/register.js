import Head from 'next/head'
import registerStyles from '../styles/Register.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';


export default function Register() {
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleGender(e) {
    setGender(e.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      gender: gender
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/register';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <h1>Register</h1>
      <form className={registerStyles.form} onSubmit={handleSubmit}>
        <TextField value={email} id="email" label="Email" variant="outlined" margin="dense" onChange={handleEmail}/>
        <TextField value={gender} id="gender" label="Gender" variant="outlined" margin="dense" onChange={handleGender}/>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </>
  )
}