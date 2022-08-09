import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const nav = props =>
    <aside className='menu-area'>
        <nav className='menu'>
            {/* Refatorar para colocar os componentes isolados */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>

export default nav