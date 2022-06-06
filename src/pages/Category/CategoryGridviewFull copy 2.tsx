import React from 'react'
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import classNames from 'classnames/bind';
import styles from './CategoryGridviewFull.module.scss'
const cx = classNames.bind(styles);
const CategoryGridviewFull = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx("filter")}>
                <div className={cx("filter-count")}>
                    4500 Apparel
                </div>
                <div className={cx("filter-option")}>
                    <div className={cx("filter-option-select")}>
                        <span>New <img src={require('../../assets/category/Polygon 1.png')} alt="" /></span>
                    </div>
                    <div className={cx("filter-option-listview")}>
                        <img src={require('../../assets/category/Listview.png')} alt="" />
                    </div>
                    <div className={cx("filter-option-filter")}>
                        <img src={require('../../assets/category/Filter.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className={cx("tag")}>
                <div className={cx("tag-women")}>
                    Womem <span>x</span>
                </div>
                <div className={cx("tag-all")}>
                    All Appavel <span>x</span>
                </div>
            </div>

            <div className={cx("product")}>
                <img src={require('../../assets/category/image 15.png')} className={cx("product-image")} alt="" />
                <div className={cx("product-info")}>
                    <p className={cx("product-info-title")}>
                        MOHAN
                    </p>
                    <div className={cx("product-info-name")}>
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className={cx('product-heart')} alt="" />
            </div>

            <div className={cx("product")}>
                <img src={require('../../assets/category/image 15.png')} className={cx("product-image")} alt="" />
                <div className={cx("product-info")}>
                    <p className={cx("product-info-title")}>
                        MOHAN
                    </p>
                    <div className={cx("product-info-name")}>
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className={cx('product-heart')} alt="" />
            </div>

            <div className={cx("product")}>
                <img src={require('../../assets/category/image 15.png')} className={cx("product-image")} alt="" />
                <div className={cx("product-info")}>
                    <p className={cx("product-info-title")}>
                        MOHAN
                    </p>
                    <div className={cx("product-info-name")}>
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className={cx('product-heart')} alt="" />
            </div>

            <div className={cx("product")}>
                <img src={require('../../assets/category/image 15.png')} className={cx("product-image")} alt="" />
                <div className={cx("product-info")}>
                    <p className={cx("product-info-title")}>
                        MOHAN
                    </p>
                    <div className={cx("product-info-name")}>
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className={cx('product-heart')} alt="" />
            </div>

            <div className={cx("paginate")}>
                <div className={cx("paginate-one")}>1</div>
                <div className={cx("paginate-one")}>2</div>
                <div className={cx("paginate-one")}>3</div>
                <div className={cx("paginate-one")}>4</div>
                <div className={cx("paginate-one")}>5</div>
                <div className={cx("paginate-iconnext")}>
                    <img src={require('../../assets/category/Forward.png')} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CategoryGridviewFull