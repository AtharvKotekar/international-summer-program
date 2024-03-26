import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae faucibus iaculis ut diam nulla nisi diam. Rhoncus leo gravida in commodo ac donec rhoncus amet venenatis. Lorem ut faucibus lorem tortor pharetra enim faucibus. Velit risus sit erat neque sollicitudin nibh eros aenean. Purus consequat libero ullamcorper tellus pharetra eget. Ut in facilisis dolor praesent ultrices mauris phasellus.
          <br /><br />
          Sed morbi sit non sagittis orci sit nunc. Blandit adipiscing id sed quam semper laoreet. Nulla nisi aliquet scelerisque ut duis vulputate dignissim. Vitae orci massa lacus augue. Est aliquet sit eu elementum eu. Turpis nunc commodo viverra diam pulvinar platea ultricies quis. In suspendisse egestas interdum cursus neque. Purus bibendum interdum nibh velit praesent pellentesque bibendum maecenas. Viverra iaculis morbi scelerisque id blandit. Diam porttitor non convallis a dignissim viverra platea. Praesent massa id quisque pulvinar tortor sit. Ultricies aliquet egestas imperdiet eget. Odio mattis augue enim ac duis malesuada eu ultricies. Dui convallis maecenas faucibus vel quam sed dictum egestas.
          <br /><br />
          Aliquam velit ultrices morbi tortor enim. Cursus mattis sed tristique imperdiet at facilisis pellentesque. Tellus tristique vel eleifend turpis. Diam amet quis nibh habitant elit suspendisse. Sit dolor eu massa sed enim pellentesque ut lorem diam. Dolor lorem suspendisse imperdiet augue id vitae porttitor turpis phasellus. Hac vitae ornare duis purus nulla lacinia nec nisi est. Tempor mauris non libero dolor tempus dolor id a amet. Viverra eget tempor mi donec nulla. Nascetur sit cursus in ipsum adipiscing adipiscing augue. Sit fringilla volutpat tristique diam. Ac magna eu suspendisse sit. Nunc ac aliquet ornare consectetur augue. Fermentum purus et morbi consectetur suspendisse in lacinia suspendisse.
        </p>
      </div>
      <div className="line"></div>
      <div className='coloums-group'>
        <div className='coloum'>
          <ul>
            <li ><a href="/" id='coloum-title'>How to apply</a></li>
            <li><a href="/">Program</a></li>
            <li><a href="/">Process</a></li>
            <li><a href="/">Application</a></li>
            <li><a href="/">Decision</a></li>
          </ul>
        </div>
        <div className='coloum'>
          <ul>
            <li ><a href="/" id='coloum-title'>Curriculum</a></li>
            <li><a href="/">STEM</a></li>
            <li><a href="/">Humanity</a></li>
            <li><a href="/">Social Sciences</a></li>
            <li><a href="/">Interdisciplinary</a></li>
          </ul>
        </div>
        <div className='coloum'>
          <ul>
            <li><a href="/" id='coloum-title' >Tuition & Aid</a></li>
            <li><a href="/">Financial Aid</a></li>
            <li><a href="/">Application Fee Waiver</a></li>
            <li><a href="/">International Student Policy</a></li>
          </ul>
        </div>
        <div className='coloum'>
          <ul>
            <li><a href="/" id='coloum-title'>About</a></li>
            <li><a href="/">Our team</a></li>
            <li><a href="/">Partners</a></li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className='copyright-group'>
        <div className='copyright-text'>
          <p>Ⓒ Copyright 2024 ISP All right reserved</p>
        </div>
        <div className='termsandcondition-group'>
        
        <div className='terms'>
          <a href="/">Terms</a>
        </div>

        <div className= "vertical"/>

        <div className='conditions'>
        <a href="/">Conditions</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer