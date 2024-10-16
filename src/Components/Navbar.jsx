import React from 'react'
import Styles from './Navbar.module.css'


const Navbar = () => {



  return (
    <div className={Styles.nav}>
        <p className={Styles.logoName}>I-SCREAM</p>
        <p className={Styles.LinkCont}>
            <a href="">Categories</a>
            <a href="">Brands</a>
            <a href="">Become Seller</a>
            <a href="">Login</a>
        </p>
    </div>
  )
}

export default Navbar