import React from "react";

import classes from "./Main.module.css";
import commonClasses from '../../styles/Common.module.css';
import Header from './../../components/layout/Header/Header';

const Main = () => {
    return (
    <div>
        <Header />
        <section className={classes.main}>

            <div className={commonClasses.container}>

                <div className={classes.promo_text}>
                    <div className={classes.promo_title}>
                        Amazing Discounts 
                        <br />on Garden Products!
                    </div>

                    <div className={classes.promo_btn}>
                        <a href="#!" className={classes.promo_btn}>
                        Check out
                        </a>
                    </div>
                </div>
            </div>
    </section> 
    </div>      
    )
}

export default Main;