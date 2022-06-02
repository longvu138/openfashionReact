import React from 'react'
import Footer from '../../component/footer/Footer'
import './Collection.scss'
const Collection = () => {
    return (
        <>
            <div className="header">
                <div className="header-collections-menu">
                    <img src={require("../../assets/collections/Menu.png")} alt="" />
                </div>
                <div className="header-collections-logo">
                    <img src={require("../../assets/collections/Logo.png")} alt="" />
                </div>
                <div className="header-collections-search">
                    <img src={require("../../assets/collections/Search.png")} alt="" />
                </div>
                <div className="header-collections-cart">
                    <img src={require("../../assets/collections/shopping bag.png")} alt="" />
                </div>
            </div>

            <div className="container">
                <div className="collection">
                    <img src={require('../../assets/collections/October.png')} className="collection-october" alt="" />
                    <img src={require('../../assets/collections/Collection.png')} className="collection-collection" alt="" />
                    <img src={require('../../assets/collections/10.png')} className="collection-10" alt="" />
                </div>
                <div className="collection-slide">
                    <img src={require('../../assets/collections/image 20.png')} className="collection-slide-image" alt="" />
                    <img src={require('../../assets/collections/11.png')} className="collection-slide-10" alt="" />
                    <div className="collection-slide-october">
                        <p className='collection-slide-october-01'> 01  </p>
                        <p className='collection-slide-october-text'>October Collection</p>
                    </div>

                </div>

                <div className="collection-slide">
                    <img src={require('../../assets/collections/image 21.png')} className="collection-slide-image" alt="" />
                    <img src={require('../../assets/collections/11.png')} className="collection-slide-10" alt="" />
                    <div className="collection-slide-october">
                        <p className='collection-slide-october-01'> 02 </p>
                        <p className='collection-slide-october-text'>Black Collection</p>
                    </div>
                </div>

                <div className="collection-slide">
                    <img src={require('../../assets/collections/image 22.png')} className="collection-slide-image" alt="" />
                    <img src={require('../../assets/collections/11.png')} className="collection-slide-10" alt="" />
                    <div className="collection-slide-october">
                        <p className='collection-slide-october-01'> 03 </p>
                        <p className='collection-slide-october-text'>HAE BY HAEKIM</p>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Collection