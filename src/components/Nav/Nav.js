import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavStyle.js';
import {Navbar, NavLogo, Ul, LinkNav} from './NavStyle.js';

function Nav() {
    return (
        <Navbar>
            <div className="container">
                <div className="nav__content">
                    <NavLogo>ultra profile</NavLogo>
                    <input type="checkbox" name="nav" id="nav"/>
                    <label htmlFor="nav" className="nav__label">
                        <span>&nbsp;</span>
                    </label>
                    <Ul>
                        <li className="nav__item">
                            <LinkNav as={NavLink} to="/">Home</LinkNav>
                        </li>
                        <li className="nav__item">
                            <LinkNav to="/">work</LinkNav>
                        </li>
                        <li className="nav__item">
                            <LinkNav to="/">portfolio</LinkNav>
                        </li>
                        <li className="nav__item">
                            <LinkNav to="/">resume</LinkNav>
                        </li>
                        <li className="nav__item">
                            <LinkNav to="/">about</LinkNav>
                        </li>
                        <li className="nav__item">
                            <LinkNav to="/contact">contact</LinkNav>
                        </li>
                    </Ul>
                </div>
            </div>

        </Navbar>
    )
}

export default Nav
