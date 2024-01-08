import React,{useState} from "react";
import { Link } from 'react-router-dom';
import logo from '../../media/logo-garten.svg';
import nav from '../../media/nav.svg';
import commonClasses from '../../styles/Common.module.css';
import {ReactComponent as Icon} from "./../../media/menu.svg";

import classes from './Header.module.css';

const Header = () => {
    const [isOpen, setOpen]= useState(false);

    const toggleMenu = () => {
        setOpen(prevState => !prevState);
    };


    return (
        <header className={classes.header}>
            <div className={commonClasses.container}>
                <div className={classes.header_row}>

                    <div className={classes.header_logo}>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className={`${classes.header_nav} ${isOpen ? "active" : ""}`}>
                        <ul className={classes.nav_list}>
                            <li className={classes.nav_list_item}>
                                <Link to="/">Main Page</Link>
                            </li>
                            <li className={classes.nav_list_item}>
                                <Link to="/categories">Categories</Link>
                            </li>
                            <li className={classes.nav_list_item}>
                                <Link to="/products">All products</Link>
                            </li>
                            <li className={classes.nav_list_item}>
                                <Link to="/sales">All sales</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.nav_basket}>
                        <img src={nav} alt="nav" />
                    </div>
                    <button className={classes.header_menu_button} 
                            onClick ={toggleMenu}>
                        <Icon /> 
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Header;