import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import './AddNewAddress.scss'
const AddNewAddress = () => {
    return (
        <div className='container'>
            <Header />
            <h3 className='addnewaddress'>Add Shipping Address</h3>
            <Devider />
            <form action="" className='info'>
                <div className="info-flex">
                    <div className="info-firstname">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div className='info-lastname'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='info-address'>
                    <label htmlFor="">Address</label>
                    <input type="text" />
                </div>
                <div className='info-city'>
                    <label htmlFor="">City</label>
                    <input type="text" />
                </div>
                <div className="info-flex">
                    <div className='info-state'>
                        <label htmlFor="">State</label>
                        <input type="text" />
                    </div>
                    <div className='info-zipcode'>
                        <label htmlFor="">Zip Code</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='info-phone'>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                </div>
            </form>
            <div className="button">
                <p className='button-continue'>Add now</p>
            </div>
        </div>
    )
}

export default AddNewAddress