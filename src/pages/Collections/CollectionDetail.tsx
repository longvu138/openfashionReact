import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import classNames from 'classnames/bind';
import styles from './CollectionDetail.module.scss';
const cx = classNames.bind(styles);
const CollectionDetail = () => {
    return (
        <>
            <div className={cx("header")}>
                <div className={cx("header-collections-menu")}>
                    <img src={require("../../assets/collections/Menu.png")} alt="" />
                </div>
                <div className={cx("header-collections-logo")}>
                    <img src={require("../../assets/collections/Logo.png")} alt="" />
                </div>
                <div className={cx("header-collections-search")}>
                    <img src={require("../../assets/collections/Search.png")} alt="" />
                </div>
                <div className={cx("header-collections-cart")}>
                    <img src={require("../../assets/collections/shopping bag.png")} alt="" />
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("collection")}>
                    <img src={require('../../assets/collections/October.png')} className={cx("collection-october")} alt="" />
                    <img src={require('../../assets/collections/Collection.png')} className={cx("collection-collection")} alt="" />
                    <img src={require('../../assets/collections/10.png')} className={cx("collection-10")} alt="" />
                </div>
                <div className={cx("collection-slide")}>
                    <img src={require('../../assets/collections/image 20.png')} className={cx("collection-slide-image")} alt="" />
                    <img src={require('../../assets/collections/11.png')} className={cx("collection-slide-10")} alt="" />
                </div>


                <div className={cx("category")}>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344.png')} className={cx("category-item-image")} alt='' />
                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />

                    </div>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344 (1).png')} className={cx("category-item-image")} alt='' />

                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />
                    </div>
                </div>

                <div className={cx("category")}>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344 (2).png')} className={cx("category-item-image")} alt='' />
                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />

                    </div>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344 (3).png')} className={cx("category-item-image")} alt='' />

                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />
                    </div>
                </div>

                <div className={cx("category")}>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344 (4).png')} className={cx("category-item-image")} alt='' />
                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />

                    </div>
                    <div className={cx("category-item")}>
                        <img src={require('../../assets/collections/Rectangle 344 (5).png')} className={cx("category-item-image")} alt='' />

                        <h4 className={cx("category-item-title")}>
                            october collection
                        </h4>
                        <p className={cx("category-item-name")}>
                            reversible angora cardigan
                        </p>
                        <p className={cx("category-item-price")}>
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className={cx("category-heart")} alt="" />
                    </div>
                </div>

                <div className={cx("text")}>You may also like</div>
                <Devider />

                <div className={cx("product-item")}>
                    <div className={cx("product-item-img1")}>
                        <img src={require("../../assets/collections/image 21.png")} alt="" />
                        <div className={cx("product-item-img1-name")}>
                            Black Collection
                        </div>

                    </div>
                    <div className={cx("product-item-img2")}>
                        <img src={require("../../assets/collections/Rectangle 441.png")} alt="" />
                        <div className={cx("product-item-img2-name")}>
                            HAE BY HA
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CollectionDetail