import React from 'react'
import './CartEmpty.scss'
const CartEmpty = () => {
    return (
        <div className='container'>
            <div className="close">
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <h2 className='cart-text'>Cart</h2>
            <div className="cart-content">
                You have no items in your Shopping Bag.
            </div>
            <div className="button">
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className='button-img-bag' />
                <p className='button-continue'>Continue Shopping</p>
            </div>
        </div>
    )
}

export default CartEmpty