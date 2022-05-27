import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>Quien soy</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Habilidades</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Estudios</a>
                    </li>
                </ul>
               
            </div>
        </div>
    )
}

export default Footer
