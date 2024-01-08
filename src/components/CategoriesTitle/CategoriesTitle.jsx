import React from "react";
import classes from './categoriesTitle.module.css';
import commonClasses from '../../styles/Common.module.css';


export const CategoriesTitle = () => {
    return (
            <div className={classes.categoriesTitle}>
                <div className={commonClasses.container}>
                    <div className={classes.nextCategories}>
                        <div>
                            <h2>Categories</h2>
                        </div>
                        <div className={classes.changeCategory}>
                            <div className={classes.title}>
                                <div className={classes.linie}></div>
                                <button className={classes.allCategoriesBtn}>All Categories</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        );
     };
    export default CategoriesTitle;   