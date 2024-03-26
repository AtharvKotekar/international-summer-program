import React from 'react'
import arrow from '../Assets/arrow.svg';
import './Eligiblity.css'

const Eligiblity = () => {
    return (
        <div className='eligiblity-container'>
            <div className='eligiblity'>
                <div className='eligiblity-header'>
                    <h1>Eligibility</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <ul className='eligiblity-list'>
                    <li className='eligiblity-item' id='eligiblity-item1'>
                    <a href="/">
                            <div className='eligiblity-title' id='eligiblity-title-black'>
                                <h2>Students between age 15 - 19</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='eligiblity-des' id='eligiblity-des-black'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                    <li className='eligiblity-item' id='eligiblity-item2'>
                    <a href="/">
                            <div className='eligiblity-title' id='eligiblity-title-white'>
                                <h2>Indian or International Student</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='eligiblity-des' id='eligiblity-des-white'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                    <li className='eligiblity-item' id='eligiblity-item3'>
                    <a href="/">
                            <div className='eligiblity-title' id='eligiblity-title-white'>
                                <h2>No test scores required</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='eligiblity-des' id='eligiblity-des-white'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                    <li className='eligiblity-item' id='eligiblity-item4'>
                    <a href="/">
                            <div className='eligiblity-title' id='eligiblity-title-white'>
                                <h2>Passionate and Enthusiastic</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='eligiblity-des' id='eligiblity-des-white'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Eligiblity