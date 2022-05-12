import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './BlogListView.scss'
const BlogListView = () => {
    return (
        <div className="container">
            <Header />
            <h1 className='title'>Blog</h1>
            <Devider />
            <div className="tag">
                <div className="tag-fashion">Fashion</div>
                <div className="tag-promo">Promo</div>
                <div className="tag-policy">Policy</div>
                <div className="tag-lookbook">Lookbook</div>
            </div>
            <div className="card">
                <img src={require('../../assets/blog/imagePost.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        4 days ago
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/blog/img1.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/blog/img2.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/blog/img3.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/blog/img4.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        10/10/2021
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/blog/img4.png')} alt="" className="card-image" />
                <div className="card-post">

                    <div className="card-post-title">
                        2021 Style Guide:
                        The Biggest Fall Trends
                    </div>
                    <div className="card-post-content">
                        The excitement of fall fashion is here and I’m already loving some of the trend forecasts
                    </div>
                    <div className="card-post-date">
                        10/10/2021
                    </div>
                </div>
            </div>
            <button className="load-more">
                LOAD MORE +
            </button>
            <Footer />
        </div>
    )
}

export default BlogListView