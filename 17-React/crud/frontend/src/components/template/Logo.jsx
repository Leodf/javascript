import './Logo.css'
import Logo from '../../assets/imgs/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const logo = props =>
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>

export default logo