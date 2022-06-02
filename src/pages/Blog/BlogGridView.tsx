import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Devider from '../../component/Devider/Devider'
import classNames from 'classnames/bind';
import styles from './BlogGridView.module.scss';
const cx = classNames.bind(styles);
const BlogGridView = () => {
  return (
    <div className={cx('container')}>
      <Header />
      <h1 className={cx('title')}>Blog</h1>
      <Devider />
      <div className={cx("tag")}>
        <div className={cx("tag-fashion")}>Fashion</div>
        <div className={cx("tag-promo")}>Promo</div>
        <div className={cx("tag-policy")}>Policy</div>
        <div className={cx("tag-lookbook")}>Lookbook</div>
      </div>
      <div className={cx("post")}>
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className={cx("post-image")} />
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className={cx("post-bookmark")} />
        <p className={cx("post-title")}>
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className={cx("post-tag")}>
          <div className={cx("post-tag-name")}>
            <div className={cx("post-tag-name-fashion")}>#Fashion</div>
            <div className={cx("post-tag-name-tips")}>#Tips</div>
          </div>
          <div className={cx("post-time")}>
            <span> 4 day ago</span>
          </div>
        </div>


      </div>
      <div className={cx("post")}>
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className={cx("post-image")} />
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className={cx("post-bookmark")} />
        <p className={cx("post-title")}>
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className={cx("post-tag")}>
          <div className={cx("post-tag-name")}>
            <div className={cx("post-tag-name-fashion")}>#Fashion</div>
            <div className={cx("post-tag-name-tips")}>#Tips</div>
          </div>
          <div className={cx("post-time")}>
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className={cx("post")}>
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className={cx("post-image")} />
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className={cx("post-bookmark")} />
        <p className={cx("post-title")}>
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className={cx("post-tag")}>
          <div className={cx("post-tag-name")}>
            <div className={cx("post-tag-name-fashion")}>#Fashion</div>
            <div className={cx("post-tag-name-tips")}>#Tips</div>
          </div>
          <div className={cx("post-time")}>
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className={cx("post")}>
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className={cx("post-image")} />
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className={cx("post-bookmark")} />
        <p className={cx("post-title")}>
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className={cx("post-tag")}>
          <div className={cx("post-tag-name")}>
            <div className={cx("post-tag-name-fashion")}>#Fashion</div>
            <div className={cx("post-tag-name-tips")}>#Tips</div>
          </div>
          <div className={cx("post-time")}>
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className={cx("post")}>
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className={cx("post-image")} />
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className={cx("post-bookmark")} />
        <p className={cx("post-title")}>
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className={cx("post-tag")}>
          <div className={cx("post-tag-name")}>
            <div className={cx("post-tag-name-fashion")}>#Fashion</div>
            <div className={cx("post-tag-name-tips")}>#Tips</div>
          </div>
          <div className={cx("post-time")}>
            <span> 4 day ago</span>
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

export default BlogGridView
