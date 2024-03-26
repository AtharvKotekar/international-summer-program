import React from 'react'
import './Hero2.css'
import arrow from '../Assets/arrow.svg';

const Hero2 = () => {
    return (
        <div className='hero2'>
            <h1 className='heading2'>
                Unleash the Heat: Ignite Your Potential This Summer!
            </h1>
            <h2 className='subheading2'>
                <span className='white-gradient'>Application are open</span>
            </h2>
            <p className='body2'>
                Lorem ipsum dolor sit amet consectetur. Cursus id nunc molestie cras magna ultrices integer sit eu. Consequat diam sit arcu id scelerisque massa aliquet. Volutpat ac diam viverra egestas ut. Neque sagittis lacus purus eget.
            </p>
            <a href='/' className='btn2'>
                <p>Explore more</p>
                <img src={arrow} className='btn_icon2'></img>
            </a>
        </div>


    );
}

export default Hero2;