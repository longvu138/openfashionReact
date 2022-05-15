import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './ProductDetail2.scss'
const ProductDetail2 = () => {
    return (
        <div className='container'>
            <Header />
            <div className="image">
                <img src={require('../../assets/product/nhan.png')} className="image-nhan" alt="" />
                <img src={require('../../assets/product/Group 204.png')} className="image-icon" alt="" />

            </div>
            <div className="slide">
                <img src={require('../../assets/product/nhan1.png')} className="slide-1" alt="" />

                <img src={require('../../assets/product/nhan2.png')} className="slide-2" alt="" />

                <img src={require('../../assets/product/nhan3.png')} className="slide-3" alt="" />

                <img src={require('../../assets/product/nhan4.png')} className="slide-4" alt="" />

                <img src={require('../../assets/product/360.png')} className="slide-icon360" alt="" />
            </div>

            <div className="product-variation">
                <img src={require('../../assets/product/Export.png')} className="product-variation-image" alt="" />
                <h5 className="product-variation-title">
                    Mohan
                </h5>
                <p className="product-variation-name">
                    Recycle Boucle Knit Cardigan Pink
                </p>
                <p className="product-variation-price">
                    120$
                </p>
                <div className="product-variation-info">
                    <div className="product-variation-info-size">
                        Ring size
                        <span className='product-variation-info-size-6' > 6 </span>
                        <span className='product-variation-info-size-8' > 8 </span>
                        <span className='product-variation-info-size-9' > 9 </span>
                        <span className='product-variation-info-size-10' > 10 </span>
                        <span className='product-variation-info-size-11' > 11 </span>

                    </div>
                </div>
            </div>

            <div className='add'>
                <img src={require('../../assets/product/Plus.png')} className="add-plus" alt="" />
                <p className='add-text'>
                    ADD TO BASKET
                </p>
                <img src={require('../../assets/product/Heart.png')} className="add-heart" alt="" />
            </div>


            <div className="gallery">
                <h5 className='gallery-title'>GALLERY</h5>
                <img src={require('../../assets/product/gallery1.png')} alt="" />
                <img src={require('../../assets/product/gallery2.png')} alt="" />
                <img src={require('../../assets/product/gallery3.png')} alt="" />
            </div>


            <div className="product-detail-icon-shipping">
                <img src={require('../../assets/product/Shipping.png')} alt="" />
                <p className='product-detail-icon-shipping-text'>Free Flat Rate Shipping</p>
                <img src={require('../../assets/product/up.png')} className="product-detail-icon-shipping-up" alt="" />
            </div>
            <div className='product-detail-care'>
                Estimated to be delivered on <br></br>
                09/11/2021 - 12/11/2021.

            </div>
            <hr className='product-detail-hr' />
            <div className="product-detail-icon-tag">
                <img src={require('../../assets/product/Tag.png')} alt="" />
                <p className='product-detail-icon-tag-text'>COD Policy</p>
                <img src={require('../../assets/product/down.png')} className="product-detail-icon-tag-down" alt="" />
            </div>
            <hr className='product-detail-hr' />

            <div className="product-detail-icon-refresh">
                <img src={require('../../assets/product/Refresh.png')} alt="" />
                <p className='product-detail-icon-refresh-text'>Return Policy</p>
                <img src={require('../../assets/product/down.png')} className="product-detail-icon-refresh-down" alt="" />
            </div>



            <h1 className='like-text'>You may also like</h1>
            <Devider />

            <div className="product">
                <div className="product-item">
                    <img src={require('../../assets/product/Rectangle 344.png')} className="product-item-image" alt='' />
                    <h4 className="product-item-title">
                        21WN
                    </h4>
                    <p className="product-item-name">
                        reversible angora cardigan
                    </p>
                    <p className="product-item-price">
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className="product-heart" alt="" />

                </div>
                <div className="product-item">
                    <img src={require('../../assets/product/Rectangle 344.png')} className="product-item-image" alt='' />

                    <h4 className="product-item-title">
                        21WN
                    </h4>
                    <p className="product-item-name">
                        reversible angora cardigan
                    </p>
                    <p className="product-item-price">
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className="product-heart" alt="" />
                </div>

            </div>
            <div className="product">
                <div className="product-item">
                    <img src={require('../../assets/product/Rectangle 344.png')} className="product-item-image" alt='' />
                    <h4 className="product-item-title">
                        21WN
                    </h4>
                    <p className="product-item-name">
                        reversible angora cardigan
                    </p>
                    <p className="product-item-price">
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className="product-heart" alt="" />

                </div>
                <div className="product-item">
                    <img src={require('../../assets/product/Rectangle 344.png')} className="product-item-image" alt='' />

                    <h4 className="product-item-title">
                        21WN
                    </h4>
                    <p className="product-item-name">
                        reversible angora cardigan
                    </p>
                    <p className="product-item-price">
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className="product-heart" alt="" />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail2