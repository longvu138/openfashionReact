import React from 'react'
import Devider from '../../component/devider/Devider'
import Footer from '../../component/footer/Footer'
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import Header1 from '../../component/header/Header1';
const cx = classNames.bind(styles);
const ProductDetail = () => {
    return (
        <div className={cx('container')}>
            <Header1 />
            <div className={cx("image")}>
                <img src={require('../../assets/product/image 15.png')} className={cx("image-avatar")} alt="" />
                <img src={require('../../assets/product/Group 204.png')} className={cx("image-icon")} alt="" />
            </div>
            <div className={cx("retagle")}>
                <div className={cx("retagle-1")}>
                </div>
                <div className={cx("retagle-2")}>
                </div>
                <div className={cx("retagle-3")}>
                </div>
                <div className={cx("retagle-4")}>
                </div>
                <div className={cx("retagle-5")}>
                </div>
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
                    <div className={cx("product-variation-info-color")}>
                        Color
                        <span className={cx('product-variation-info-color-black')} ></span>
                        <span className={cx('product-variation-info-color-brown')} ></span>
                        <span className={cx('product-variation-info-color-gray')} ></span>

                    </div>
                    <div className={cx("product-variation-info-size")}>
                        Size
                        <span className={cx('product-variation-info-size-s')} >S</span>
                        <span className={cx('product-variation-info-size-m')} >M</span>
                        <span className={cx('product-variation-info-size-l')} >L</span>
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
            <div className={cx("product-detail")}>
                <h5 className={cx('product-detail-title')}>MATERIALS</h5>
                <p className={cx('product-detail-name')}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. </p>
                <h5 className={cx('product-detail-title')}>CARE</h5>
                <p className={cx('product-detail-name')}>To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.</p>
                <div className={cx("product-detail-icon")}>
                    <img src={require('../../assets/product/Do Not Bleach.png')} alt="" />
                    <span>Do not use bleach</span>
                </div>
                <div className={cx("product-detail-icon")}>
                    <img src={require('../../assets/product/Do Not Tumble Dry.png')} alt="" />
                    <span>Do not tumble dry</span>
                </div>
                <div className={cx("product-detail-icon")}>
                    <img src={require('../../assets/product/Do Not Wash.png')} alt="" />
                    <span>Dry clean with tetrachloroethylene</span>
                </div>
                <div className={cx("product-detail-icon")}>
                    <img src={require('../../assets/product/Iron Low Temperature.png')} alt="" />
                    <span>Iron at a maximum of 110ºC/230ºF</span>
                </div>
                <h5 className={cx('product-detail-title')} >CARE</h5>
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
            </div>

            <h1 className={cx('like-text')}>You may also like</h1>
            <Devider />

            <div className={cx("product")}>
                <div className={cx("product-item")}>
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("product-item-image")} alt='' />
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("product-item-image")} alt='' />

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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("product-item-image")} alt='' />
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("product-item-image")} alt='' />

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

export default ProductDetail