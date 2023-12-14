import React, { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import './Slider.scss'

const Slider = () => {

    const [currentSlide , setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide == 0 ? 3 : (prev) => prev - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide == 3 ? 0 : (prev) => prev + 1)
    }

    const data = [
        'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/01/16/15/01/fashion-601553_640.jpg',
        'https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_1280.jpg',
        'https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_640.jpg'
    ]
    return (
        <div className='slider'>
            <div className="container" style={{transform : `translateX(-${currentSlide * 100}vw)`}} >
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />
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