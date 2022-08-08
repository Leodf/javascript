import './Logo.css'
import Logo from '../../assets/imgs/logo.png'
import React from 'react'

const logo = props =>
    <aside className='logo'>
        <a href="/" className="logo">
            <img src={Logo} alt="logo" />
        </a>
    </aside>

export default logo