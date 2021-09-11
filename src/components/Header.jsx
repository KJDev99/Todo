import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../images/logo192.png'

function Header() {
    let location = useLocation().pathname
    return (
        <header className="header">
            <div className="container header__content">
                <Link to="/" className="logo">
                    <img className="logo__img" src={logo} alt="React Logo" />
                </Link>
                <ul className="header__list">
                    <li><Link className={location !== '/todo' && location !== '/about' ? "header__link active" : "header__link"} to="/">Home</Link></li>
                    <li><Link className={location === '/todo' ? "header__link active" : "header__link"} to="/todo">Todo</Link></li>
                    <li><Link className={location === '/about' ? "header__link active" : "header__link"} to="/about">About</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
