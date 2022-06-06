import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import styles from './BlogListView.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const BlogListView = () => {
    return (
        <div className={cx("container")}>
            <Header />
            <h1 className={cx("title")}>Blog</h1>
            <Devider />
            <div className={cx("tag")}>
                <div className={cx("tag-fashion")}>Fashion</div>
                <div className={cx("tag-promo")}>Promo</div>
                <div className={cx("tag-policy")}>Policy</div>
                <div className={cx("tag-lookbook")}>Lookbook</div>
            </div>
            <div className={cx("card")}>
                <img src={require('../../assets/blog/imagePost.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>

                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        4 days ago
                    </div>
                </div>
            </div>

            <div className={cx("card")}>
                <img src={require('../../assets/blog/img1.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>

                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className={cx("card")}>
                <img src={require('../../assets/blog/img2.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>

                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className={cx("card")}>
                <img src={require('../../assets/blog/img3.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>

                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className={cx("card")}>
                <img src={require('../../assets/blog/img4.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>
                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className={cx("card")}>
                <img src={require('../../assets/blog/img4.png')} alt="" className={cx("card-image")} />
                <div className={cx("card-post")}>

                    <div className={cx("card-post-title")}>
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className={cx("card-post-content")}>
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className={cx("card-post-date")}>
                        10/10/2021
                    </div>
                </div>
            </div>
            <button className={cx("load-more")}>
                LOAD MORE +
            </button>
            <Footer />
        </div>
    )
}

export default BlogListView