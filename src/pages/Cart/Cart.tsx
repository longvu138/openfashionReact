import React from 'react'
import './Cart.scss'

const Cart = () => {
    return (
        <div className='container'>
            <div className="close">
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <h2 className='cart-text'>Cart</h2>
            <div className="cart">
                <div className="cart-item">
                    <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className="cart-item-image" />
                    <div className="cart-item-info">
                        <div className="cart-item-info-name">
                            lamerei
                        </div>
                        <div className="cart-item-info-title">
                            Recycle Boucle Knit Cardigan Pink
                        </div>
                        <div className="cart-item-info-quantity">
                            <img src={require('../../assets/cart/minus.png')} alt='' className="cart-item-info-quantity-minus" />
                            <p className="cart-item-info-quantity-number"> 1 </p>
                            <img src={require('../../assets/cart/plus.png')} alt='' className="cart-item-info-quantity-plus" />
                        </div>
                        <div className="cart-item-info-price">
                            120$
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <img src={require('../../assets/cart/Rectangle 344 (1).png')} alt="" className="cart-item-image" />
                    <div className="cart-item-info">
                        <div className="cart-item-info-name">
                            lamerei
                        </div>
                        <div className="cart-item-info-title">
                            Recycle Boucle Knit Cardigan Pink
                        </div>
                        <div className="cart-item-info-quantity">
                            <img src={require('../../assets/cart/minus.png')} alt='' className="cart-item-info-quantity-minus" />
                            <p className="cart-item-info-quantity-number"> 1 </p>
                            <img src={require('../../assets/cart/plus.png')} alt='' className="cart-item-info-quantity-plus" />
                        </div>
                        <div className="cart-item-info-price">
                            120$
                        </div>
                    </div>
                </div>
            </div>
            <div className='hr'></div>

            <div className="subtotal">
                <div className='subtotal-text'> SubTotal</div>
                <div className="subtotal-total">$240</div>
            </div>
            <p className='shipping'> *shipping charges, taxes and discount codes are calculated at the time of accounting. </p>
            <div className="button">
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className='button-img-bag' />
                <p className='button-continue'>BUY NOW</p>
            </div>
        </div>
    )
}


export default Cart