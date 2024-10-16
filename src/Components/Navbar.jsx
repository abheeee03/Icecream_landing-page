import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {


  return (
    <div className={Styles.nav}>
        <Link to="/"className={Styles.logoName}>I-SCREAM</Link>
        <p className={Styles.LinkCont}>
            <Link to="/Categories">Categories</Link>
            <Link to="/Brands">Brands</Link>
            <Link to="/BecomeSeller">Become Seller</Link>
            <Link to="/Login">Login</Link>
        </p>
    </div>
  )
}

export default Navbar