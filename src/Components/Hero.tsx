import React from 'react';
import './Hero.css';
import arrow from '../Assets/arrow.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <h1 className='heading'>
                Explore Beyond Horizon
            </h1>
            <h2 className='subheading'>
                <span className='black-gradient'>YYIS</span> Summer Program 2024
            </h2>
            <p className='body'>
                Lorem ipsum dolor sit amet consectetur. Cursus id nunc molestie cras magna ultrices integer sit eu. Consequat diam sit arcu id scelerisque massa aliquet. Volutpat ac diam viverra egestas ut. Neque sagittis lacus purus eget.
            </p>
            <a href='/' className='btn'>
                <p>Apply</p>
                <img src={arrow} className='btn_icon'></img>
            </a>
        </div>
    );
}

export default Hero;