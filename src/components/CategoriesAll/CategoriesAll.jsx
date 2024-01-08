import React, { useState, useEffect } from "react";
import classes from './categoriesAll.module.css';
import commonClasses from '../../styles/Common.module.css';
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";

export const CategoriesAll = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const url_base='http://127.0.0.1:3333/'
        const fetchCategories = async () => {
            try {
                const response = await fetch(url_base + 'categories/all');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories()
    }, [])

    return (
        <div className={classes.categoriesAll}>
            <div className={commonClasses.container}>
                <CategoriesSlider categories={categories} />
            </div>
        </div>
        

    );
};
export default CategoriesAll;


