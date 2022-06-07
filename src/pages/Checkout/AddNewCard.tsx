import React from 'react'
import Devider from '../../component/devider/Devider'
import styles from './AddNewCard.module.scss'
import classNames from 'classnames/bind';
import Header1 from '../../component/header/Header1';
const cx = classNames.bind(styles);
const AddNewCard = () => {
    return (
        <div className={cx('container')}>
            <Header1 />
            <h3 className={cx('addnewcard')}>Add Shipping Address</h3>
            <Devider />
            <div className={cx("card")}>
                <div className={cx("card-left")}>
                    <img src={require('../../assets/checkout/left.png')} alt="" />
                </div>
                <div className={cx("card-center")}>
                    <img src={require('../../assets/checkout/card.png')} alt="" />
                </div>
                <div className={cx("card-right")}>
                    <img src={require('../../assets/checkout/right.png')} alt="" />
                </div>
            </div>

            <form action="" className={cx('info-card')}>
                <div className={cx("info-card-namecard")}>
                    <label htmlFor="">Name On Card</label>
                    <input type="text" value={'OPEN Fashion'} />
                </div>
                <p className={cx(' info-card-warning')}> *Please enter your exactly as it appears on your card</p>
                <div className={cx("info-card-cardnumber")}>
                    <label htmlFor="">Card Number</label>
                    <input type="text" />
                </div>
                <div className={cx("info-card-flex")}>
                    <div className={cx("info-card-month")}>
                        <label htmlFor="">Exp Month</label>
                        <input type="text" />
                    </div>
                    <div className={cx("info-card-date")}>
                        <label htmlFor="">Exp Date</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={cx("info-card-cvv")}>
                    <label htmlFor="">CVV</label>
                    <input type="text" />
                </div>
            </form>

            <div className={cx("button")}>
                <p className={cx('button-addcard')}>Add Card</p>
            </div>
        </div>
    )
}

export default AddNewCard