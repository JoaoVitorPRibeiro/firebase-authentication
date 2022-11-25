import React from "react";
import logo from '../images/logo.svg'

export const Header = () => {
    return (
        <nav>
            <div className="container">
                <a className="navigation-brand" href="/">
                    <img src={logo} alt='Staart'/>
                </a>
            </div>
        </nav>
    )
}