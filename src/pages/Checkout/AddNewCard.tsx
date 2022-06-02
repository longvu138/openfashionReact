import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import './AddNewCard.scss'

const AddNewCard = () => {
    return (
        <div className='container'>
            <Header />
            <h3 className='addnewcard'>Add Shipping Address</h3>
            <Devider />
            <div className="card">
                <div className="card-left">
                    <img src={require('../../assets/checkout/left.png')} alt="" />
                </div>
                <div className="card-center">
                    <img src={require('../../assets/checkout/card.png')} alt="" />
                </div>
                <div className="card-right">
                    <img src={require('../../assets/checkout/right.png')} alt="" />
                </div>
            </div>

            <form action="" className='info-card'>
                <div className="info-card-namecard">
                    <label htmlFor="">Name On Card</label>
                    <input type="text" value={'OPEN Fashion'} />
                </div>
                <p className=' info-card-warning'> *Please enter your exactly as it appears on your card</p>
                <div className="info-card-cardnumber">
                    <label htmlFor="">Card Number</label>
                    <input type="text" />
                </div>
                <div className="info-card-flex">
                    <div className="info-card-month">
                        <label htmlFor="">Exp Month</label>
                        <input type="text" />
                    </div>
                    <div className="info-card-date">
                        <label htmlFor="">Exp Date</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="info-card-cvv">
                    <label htmlFor="">CVV</label>
                    <input type="text" />
                </div>
            </form>

            <div className="button">
                <p className='button-addcard'>Add Card</p>
            </div>
        </div>
    )
}

export default AddNewCard