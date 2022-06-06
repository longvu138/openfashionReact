import React from 'react'
import styles from './Search.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Search = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("search-top")}>
                <img src={require('../../assets/search/Search.png')} className={cx("search-icon")} alt="" />
                <input type="text" className={cx('input-search')} placeholder='Search items' />
                <img src={require('../../assets/search/Close.png')} className={cx("close-icon")} alt="" />
            </div>
            <div className={cx("hr")}>

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

export default Search