import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'

import styles from './Search_view.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Search_view = () => {
    return (
        <div className={cx('container')}>
            <Header />

            <div className={cx("search-top")}>
                <input type="text" className={cx('input-search')} placeholder='Dress' />
                <img src={require('../../assets/search/Close.png')} className={cx("close-icon")} alt="" />
                {/* <span className={cx("search-icon">X</span> */}
                <img src={require('../../assets/search/Search.png')} className={cx("search-icon")} alt="" />
            </div>
            <div className={cx("hr")}></div>

            <div className={cx("filter")}>
                <div className={cx("filter-count")}>
                    8 result of dress
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




            <div className={cx("category")}>
                <div className={cx("category-item")}>
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className={cx("category-item-image")} alt='' />
                    <h4 className={cx("category-item-title")}>
                        21WN
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
        </div >

    )
}

export default Search_view