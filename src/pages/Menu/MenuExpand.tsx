import React from 'react'
import './MenuExpand.scss'
const MenuExpand = () => {
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
                <img src={require('../../assets/menu/Vector.png')} alt="" />
                <div className="menu-item-apparel-item">
                    <ul>
                        <li>outer</li>
                        <li>dress</li>
                        <li>blouse/shirt</li>
                        <li>t-shirt</li>
                        <li>knitwear</li>
                        <li>skirt</li>
                        <li>pants</li>
                        <li>denim</li>
                        <li>kids</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default MenuExpand