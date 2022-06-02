import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import './OurStory.scss'
const OurStory = () => {
    return (
        <div className='container'>
            <Header />
            <h1 className='ourstory'>Our Story</h1>
            <Devider />
            <p className='ourstory-text'>
                Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI Kit file by Figma.
            </p>
            <p className='ourstory-text'>
                Create stunning shop with bulletproof guidelines and thoughtful components. Its library contains more than 50+ components supporting Light & Dark Mode and 60+ ready to use mobile screens.
            </p>
            <div className="ourstory-image">
                <img src={require('../../assets/ourstory/image 3.png')} alt="" />
            </div>

            <div className="sign-up">Sign Up</div>
            <Devider />
            <div className="sign-up-text">
                Receive early access to new arrivals, sales, exclusive content, events and much more!
            </div>
            <div className="email">Email address</div>
            <div className='hr'></div>
            <div className="button">
                <p className='button-continue'>SUBMIT</p>
                <img src={require('../../assets/ourstory/Forward Arrow.png')} alt="" className='button-img-bag' />
            </div>
        </div>
    )
}

export default OurStory