import React,{useState} from "react";
import logo from '../../../img/logo-garten.svg';
import nav from '../../../img/nav.svg';
import commonClasses from '../../../styles/Common.module.css';
import {ReactComponent as Icon} from "./../../../img/menu.svg";
// import closeIcon from "./../../../img/open menu.svg";

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
                            <li className={classes.nav_list_item}><a href="#!">Main Page</a></li>
                            <li className={classes.nav_list_item}><a href="#!">Categories</a></li>
                            <li className={classes.nav_list_item}><a href="#!">All products</a></li>
                            <li className={classes.nav_list_item}><a href="#!">All sales</a></li>
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