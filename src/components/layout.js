import React from 'react'
import Header from './header'
import Footer from './footer'
import { Helmet } from "react-helmet"
import layoutStyles from './layout.module.scss'
import "../styles/index.scss"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Feline Love</title>
            </Helmet>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout