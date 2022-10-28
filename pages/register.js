import Head from 'next/head'
import registerStyles from '../styles/Register.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
    return (
      <>
        <Head>
          <title>Register</title>
        </Head>
        <h1>Register</h1>
        <div className={registerStyles.form}>
          <TextField id="email" label="Email" variant="outlined" margin="dense"/>
          <TextField id="gender" label="Gender" variant="outlined" margin="dense"/>
          <Button variant="contained">Submit</Button>
        </div>
      </>
    )
}