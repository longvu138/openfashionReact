import React from 'react'
import Devider from '../../component/devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import classNames from 'classnames/bind';
import styles from './ProductDetail2.module.scss';
const cx = classNames.bind(styles);
const ProductDetail2 = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx("image")}>
                <img src={require('../../assets/product/nhan.png')} className={cx("image-nhan")} alt="" />
                <img src={require('../../assets/product/Group 204.png')} className={cx("image-icon")} alt="" />

            </div>
            <div className={cx("slide")}>
                <img src={require('../../assets/product/nhan1.png')} className={cx("slide-1")} alt="" />

                <img src={require('../../assets/product/nhan2.png')} className={cx("slide-2")} alt="" />

                <img src={require('../../assets/product/nhan3.png')} className={cx("slide-3")} alt="" />

                <img src={require('../../assets/product/nhan4.png')} className={cx("slide-4")} alt="" />

                <img src={require('../../assets/product/360.png')} className={cx("slide-icon360")} alt="" />
            </div>

            <div className={cx("product-variation")}>
                <img src={require('../../assets/product/Export.png')} className={cx("product-variation-image")} alt="" />
                <h5 className={cx("product-variation-title")}>
                    Mohan
                </h5>
                <p className={cx("product-variation-name")}>
                    Recycle Boucle Knit Cardigan Pink
                </p>
                <p className={cx("product-variation-price")}>
                    120$
                </p>
                <div className={cx("product-variation-info")}>
                    <div className={cx("product-variation-info-size")}>
                        Ring size
                        <span className={cx('product-variation-info-size-6')} > 6 </span>
                        <span className={cx('product-variation-info-size-8')} > 8 </span>
                        <span className={cx('product-variation-info-size-9')} > 9 </span>
                        <span className={cx('product-variation-info-size-10')} > 10 </span>
                        <span className={cx('product-variation-info-size-11')} > 11 </span>

                    </div>
                </div>
            </div>

            <div className={cx('add')}>
                <img src={require('../../assets/product/Plus.png')} className={cx("add-plus")} alt="" />
                <p className={cx('add-text')}>
                    ADD TO BASKET
                </p>
                <img src={require('../../assets/product/Heart.png')} className={cx("add-heart")} alt="" />
            </div>


            <div className={cx("gallery")}>
                <h5 className={cx('gallery-title')}>GALLERY</h5>
                <img src={require('../../assets/product/gallery1.png')} alt="" />
                <img src={require('../../assets/product/gallery2.png')} alt="" />
                <img src={require('../../assets/product/gallery3.png')} alt="" />
            </div>


            <div className={cx("product-detail-icon-shipping")}>
                <img src={require('../../assets/product/Shipping.png')} alt="" />
                <p className={cx('product-detail-icon-shipping-text')}>Free Flat Rate Shipping</p>
                <img src={require('../../assets/product/up.png')} className={cx("product-detail-icon-shipping-up")} alt="" />
            </div>
            <div className={cx('product-detail-care')}>
                Estimated to be delivered on <br></br>
                09/11/2021 - 12/11/2021.

            </div>
            <hr className={cx('product-detail-hr')} />
            <div className={cx("product-detail-icon-tag")}>
                <img src={require('../../assets/product/Tag.png')} alt="" />
                <p className={cx('product-detail-icon-tag-text')}>COD Policy</p>
                <img src={require('../../assets/product/down.png')} className={cx("product-detail-icon-tag-down")} alt="" />
            </div>
            <hr className={cx('product-detail-hr')} />

            <div className={cx("product-detail-icon-refresh")}>
                <img src={require('../../assets/product/Refresh.png')} alt="" />
                <p className={cx('product-detail-icon-refresh-text')}>Return Policy</p>
                <img src={require('../../assets/product/down.png')} className={cx("product-detail-icon-refresh-down")} alt="" />
            </div>



            <h1 className={cx('like-text')}>You may also like</h1>
            <Devider />

            <div className={cx("product")}>
                <div className={cx("product-item")}>
                    <img src={require('../../assets/product/Rectangle 344.png')} className={cx("product-item-image")} alt='' />
                    <h4 className={cx("product-item-title")}>
                        21WN
                    </h4>
                    <p className={cx("product-item-name")}>
                        reversible angora cardigan
                    </p>
                    <p className={cx("product-item-price")}>
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className={cx("product-heart")} alt="" />

                </div>
                <div className={cx("product-item")}>
                    <img src={require('../../assets/product/Rectangle 344.png')} className={cx("product-item-image")} alt='' />

                    <h4 className={cx("product-item-title")}>
                        21WN
                    </h4>
                    <p className={cx("product-item-name")}>
                        reversible angora cardigan
                    </p>
                    <p className={cx("product-item-price")}>
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className={cx("product-heart")} alt="" />
                </div>

            </div>
            <div className={cx("product")}>
                <div className={cx("product-item")}>
                    <img src={require('../../assets/product/Rectangle 344.png')} className={cx("product-item-image")} alt='' />
                    <h4 className={cx("product-item-title")}>
                        21WN
                    </h4>
                    <p className={cx("product-item-name")}>
                        reversible angora cardigan
                    </p>
                    <p className={cx("product-item-price")}>
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className={cx("product-heart")} alt="" />

                </div>
                <div className={cx("product-item")}>
                    <img src={require('../../assets/product/Rectangle 344.png')} className={cx("product-item-image")} alt='' />

                    <h4 className={cx("product-item-title")}>
                        21WN
                    </h4>
                    <p className={cx("product-item-name")}>
                        reversible angora cardigan
                    </p>
                    <p className={cx("product-item-price")}>
                        $120
                    </p>
                    <img src={require('../../assets/category/heart.png')} className={cx("product-heart")} alt="" />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail2