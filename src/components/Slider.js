import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from '../database/SlideData';
import '../styles/slide.css';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className='projetos' id='projetos'>
            <h1>PRINCIPAIS PROJETOS</h1>
            <section className='slider'>
                <FaArrowAltCircleLeft className='left' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right' onClick={nextSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<a href={slide.link} className='visitarSite'>VISITAR WEBSITE</a>)}
                            {index === current && (<img src={slide.image} alt='images' className='image-slide' />
                            )}
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default ImageSlider;