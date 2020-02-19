import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
const Header = () => {
    return (
        <div>
            <h1><Link to="/" className={headerStyles.title}>Feline Love</Link></h1>
            <nav>
                <ul className={headerStyles.navlist}>
                    <li><Link className={headerStyles.navitem} to="/">Home</Link></li>
                    <li><Link className={headerStyles.navitem} to="/facts">Cat Facts</Link></li>
                    <li><Link className={headerStyles.navitem} to="/pics">Cat Pics</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header