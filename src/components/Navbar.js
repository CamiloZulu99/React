import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="About" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Conoceme</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="Testimonials" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Habilidades</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="Demo" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Estudios</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar