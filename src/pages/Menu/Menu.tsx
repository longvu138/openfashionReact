import React from 'react'
import Devider from '../../component/Devider/Devider'
import './Menu.scss'
const Menu = () => {
    return (
        <div className='container'>
            <div className="close">
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <div className="menu">
                <p>Women</p>
                <p>Man</p>
                <p>Kids</p>
            </div>
            <hr className='hr' />
            <div className="menu-item">
                <p>New</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="menu-item">
                <p>Apparel</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="menu-item">
                <p>Bag</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="menu-item">
                <p>Shoes</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="menu-item">
                <p>Beauty</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="menu-item">
                <p>Accessories</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className="phone">
                <img src={require('../../assets/menu/Call.png')} className="phone-image" alt="" />
                <p className='phone-number'> (786) 713-8616 </p>
            </div>

            <div className="location">
                <img src={require('../../assets/menu/Location.png')} className="location-image" alt="" />
                <p className='location-text'> Store locator </p>
            </div>

            <Devider />
            <div className="social">
                <img src={require('../../assets/menu/Twitter.png')} alt="" />
                <img src={require('../../assets/menu/Instagram.png')} className="social-insta" alt="" />
                <img src={require('../../assets/menu/YouTube.png')} alt="" />

            </div>
        </div>
    )
}

export default Menu
