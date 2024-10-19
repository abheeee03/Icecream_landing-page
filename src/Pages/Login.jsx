import React from 'react'
import Styles from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={Styles.FormHolder}>
      <p> Welcome Back! </p>
      <input type="text" placeholder='Enter Your Username / Email' />
      <input type="password" placeholder='Enter Password' />
      <div className={Styles.btnHolder}>
      <button>Login</button>
      </div>
      <Link className={Styles.link}> New Customer? Create Account </Link>
    </div>
  )
}

export default Login