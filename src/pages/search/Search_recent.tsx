import React from 'react'

import styles from './Search_recent.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Search_recent = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("search-top")}>
                <img src={require('../../assets/search/Search.png')} className={cx("search-icon")} alt="" />
                <input type="text" className={cx('input-search')} placeholder='Search items' />
                <img src={require('../../assets/search/Close.png')} className={cx("close-icon")} alt="" />
            </div>
            <div className={cx("hr")}>

            </div>
            <div className={cx("recent-search")}>
                <p className={cx('recent-search-text')}>Recent search</p>
                <div className={cx("recent-search-tag")}>
                    <div className={cx("recent-search-tag-dress")}>
                        Dress <span> x</span>
                    </div>
                    <div className={cx("recent-search-tag-collection")}>
                        Collection <span> x</span>
                    </div>
                    <div className={cx("recent-search-tag-nike")}>
                        Nike <span> x</span>
                    </div>
                </div>
            </div>

            <div className={cx("search-terms")}>
                <p className={cx("search-terms-text")}>
                    Popular search terms
                </p>
                <div className={cx("search-terms-list")}>
                    <ul>
                        <li>Trend</li>
                        <li>Dress</li>
                        <li>Bag</li>
                        <li>Tshirt</li>
                        <li>Beauty</li>
                        <li>Accessories</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Search_recent