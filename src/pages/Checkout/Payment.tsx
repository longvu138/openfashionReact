import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './Payment.scss'
const Payment = () => {
    return (
        <div className='container'>
            <Header />
            <div className="total">
                <p className='total-text'>TOTAL</p>
                <p className='total-price'>$240</p>
            </div>
            <div className="button">
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className='button-img-bag' />
                <a href='#popup1' className='button-continue'>Check OUT</a>
            </div>


            <div id="popup1" className="overlay">
                <div className="popup">
                    <div className="popup-header">
                        <a className="popup-header-close" href="#">&times;</a>
                    </div>
                    <div className="popup-content">
                        <h2 className='popup-content-text'>Payment Success</h2>
                        <img src={require('../../assets/checkout/Vector.png')} className="popup-content-vector" alt="" />
                        <p className='popup-content-n'> Your payment was success</p>
                        <p className='popup-content-id'>Payment ID</p>
                        <Devider />
                        <p className='popup-content-rate'>Rate your purchase</p>
                        <div className="icon">
                            <img src={require('../../assets/checkout/Disappointed.png')} alt="" />
                            <img src={require('../../assets/checkout/Happy.png')} alt="" />
                            <img src={require('../../assets/checkout/In Love.png')} alt="" />
                        </div>
                        <div className="popup-content-btn">
                            <button className='popup-content-btn-submit'>Submit</button>
                            <button className='popup-content-btn-back'>Back To Home</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment