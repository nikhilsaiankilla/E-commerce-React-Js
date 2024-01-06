import React, { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import './Slider.scss'

import SliderImages from './../../data/Categories.json'

const Slider = () => {

    const [currentSlide , setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide == 0 ? 2 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide == 2 ? 0 : (prev) => prev + 1)
    }

    const images = SliderImages.categories

    return (
        <div className='slider'>
            <div className="container" style={{transform : `translateX(-${currentSlide * 100}vw)`}} >
                {
                    images?.map(image => <img src={image.image} key={image.id}/>)
                }
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider