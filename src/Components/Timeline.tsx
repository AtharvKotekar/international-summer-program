import React from 'react'
import './Timeline.css'
import arrow from '../Assets/arrow.svg';

const Timeline = () => {
    return (
        <div className='timeline-container'>
            <div className='timeline'>
                <div className='timeline-header'>
                    <h1>Time Line</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <ul className='timeline-list'>
                    <li className='timeline-item' id='timeline-item-1'>
                        <a href="/">
                            <div className='timeline-title'>
                                <h2>Registration</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='timeline-date'>
                                <p>April 10 - May 10</p>
                            </div>
                            <div className='timeline-des'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                    <li className='timeline-item' id='timeline-item-2'>
                        <a href="/">
                            <div className='timeline-title' id='timeline-title-white'>
                                <h2>Decision</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='timeline-date' id='timeline-date-white'>
                                <p>April 16 - May 15</p>
                            </div>
                            <div className='timeline-des' id='timlinedes-des-white'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                    <li className='timeline-item' id='timeline-item-3'>
                        <a href="/">
                            <div className='timeline-title' id='timeline-title-white'>
                                <h2>Program</h2>
                                <img src={arrow}></img>
                            </div>
                            <div className='timeline-date' id='timeline-date-white'>
                                <p>May 25 - May 30</p>
                            </div>
                            <div className='timeline-des' id='timlinedes-des-white'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Timeline;