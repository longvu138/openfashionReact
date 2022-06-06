import React from 'react'
import Footer from '../../component/footer/Footer'
import classNames from 'classnames/bind';
import styles from './Collection.module.scss';
const cx = classNames.bind(styles);
const Collection = () => {
    return (
        <>
            <div className={cx("header")}>
                <div className={cx("header-collections-menu")} >
                    <img src={require("../../assets/collections/Menu.png")} alt="" />
                </div>
                <div className={cx("header-collections-logo")}>
                    <img src={require("../../assets/collections/Logo.png")} alt="" />
                </div>
                <div className={cx("header-collections-search")} >
                    <img src={require("../../assets/collections/Search.png")} alt="" />
                </div>
                <div className={cx("header-collections-cart")} >
                    <img src={require("../../assets/collections/shopping bag.png")} alt="" />
                </div>
            </div>

            <div className={cx("container")} >
                <div className={cx("collection")}>
                    <img src={require('../../assets/collections/October.png')} className={cx("collection-october")} alt="" />
                    <img src={require('../../assets/collections/Collection.png')} className={cx("collection-collection")} alt="" />
                    <img src={require('../../assets/collections/10.png')} className={cx("collection-10")} alt="" />
                </div>
                <div className={cx("collection-slide")} >
                    <img src={require('../../assets/collections/image 20.png')} className={cx("collection-slide-image")} alt="" />
                    <img src={require('../../assets/collections/11.png')} className={cx("collection-slide-10")} alt="" />
                    <div className={cx("collection-slide-october")} >
                        <p className={cx('collection-slide-october-01')} > 01  </p>
                        <p className={cx('collection-slide-october-text')} >October Collection</p>
                    </div>

                </div>

                <div className={cx("collection-slide")} >
                    <img src={require('../../assets/collections/image 21.png')} className={cx("collection-slide-image")} alt="" />
                    <img src={require('../../assets/collections/11.png')} className={cx("collection-slide-10")} alt="" />
                    <div className={cx("collection-slide-october")} >
                        <p className={cx('collection-slide-october-01')} > 02 </p>
                        <p className={cx('collection-slide-october-text')} >Black Collection</p>
                    </div>
                </div>

                <div className={cx("collection-slide")} >
                    <img src={require('../../assets/collections/image 22.png')} className={cx("collection-slide-image")} alt="" />
                    <img src={require('../../assets/collections/11.png')} className={cx("collection-slide-10")} alt="" />
                    <div className={cx("collection-slide-october")} >
                        <p className={cx('collection-slide-october-01')} > 03 </p>
                        <p className={cx('collection-slide-october-text')}>HAE BY HAEKIM</p>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Collection