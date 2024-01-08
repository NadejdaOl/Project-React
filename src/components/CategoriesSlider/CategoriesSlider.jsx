import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from './CategoriesSlider.module.css';
import commonClasses from '../../styles/Common.module.css';
import CategoriesCard from '../CategoriesCard/CategoriesCard'; 

const CategoriesSlider = ({ categories }) => {
    if (!categories || categories.length === 0) {
        return <div>No categories available</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: false,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={classes.sliderCard}>
                
            <Slider {...settings}>
                {categories.map((category) => (
                    <CategoriesCard
                        key={category.id}
                        title={category.title}
                        image={category.image}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CategoriesSlider;