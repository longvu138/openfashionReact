import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'

import styles from './AddNewAddress.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const AddNewAddress = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <h3 className={cx('addnewaddress')}>Add Shipping Address</h3>
            <Devider />
            <form action="" className={cx('info')}>
                <div className={cx("info-flex")} >
                    <div className={cx("info-firstname")} >
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div className={cx('info-lastname')} >
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={cx('info-address')} >
                    <label htmlFor="">Address</label>
                    <input type="text" />
                </div>
                <div className={cx('info-city')} >
                    <label htmlFor="">City</label>
                    <input type="text" />
                </div>
                <div className={cx("info-flex")} >
                    <div className={cx('info-state')}>
                        <label htmlFor="">State</label>
                        <input type="text" />
                    </div>
                    <div className={cx('info-zipcode')} >
                        <label htmlFor="">Zip Code</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={cx('info-phone')} >
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                </div>
            </form>
            <div className={cx("button")} >
                <p className={cx('button-continue')}>Add now</p>
            </div>
        </div>
    )
}

export default AddNewAddress