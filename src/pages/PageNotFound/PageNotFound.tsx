import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './PageNotFound.scss'
const PageNotFound = () => {
    return (
        <div className='container'>
            <Header />
            <h1 className='title'>Page Not Found</h1>
            <img src={require('../../assets/ourstory/Tailors Dummy.png')} className="image" alt="" />
            <p className='text'>We can't find the page you looking for, it will return to the</p>
            <div className="button">
                <img src={require('../../assets/ourstory/ForwardLeftArrow.png')} alt="" className='button-img-bag' />
                <p className='button-continue'>Home Page</p>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound