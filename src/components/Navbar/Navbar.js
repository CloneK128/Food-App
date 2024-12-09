import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");

    const { getTotalCartAmout } = useContext(StoreContext)

    return (
        <div className='navbar'>
            <Link to='/'><img onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }} src={assets.logo} alt='' className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => {
                    setMenu("home");
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>

            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='' />
                <div className='navbar-search-icon'>
                    <Link to='/cart'><img src={assets.basket_icon} /></Link>
                    <div className={getTotalCartAmout() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar
