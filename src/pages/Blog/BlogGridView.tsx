import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import Devider from '../../component/Devider/Devider'

import "./BlogGridView.scss"
const BlogGridView = () => {
  return (
    <div className='container'>
      <Header />
      <h1 className='title'>Blog</h1>
      <Devider />
      <div className="tag">
        <div className="tag-fashion">Fashion</div>
        <div className="tag-promo">Promo</div>
        <div className="tag-policy">Policy</div>
        <div className="tag-lookbook">Lookbook</div>
      </div>
      <div className="post">
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className="post-image" />
        {/* <div className="post-image"></div> */}
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className="post-bookmark" />
        <p className="post-title">
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className="post-tag">
          <div className="post-tag-name">
            <div className="post-tag-name-fashion">#Fashion</div>
            <div className="post-tag-name-tips">#Tips</div>
          </div>
          <div className="post-time">
            <span> 4 day ago</span>
          </div>
        </div>


      </div>
      <div className="post">
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className="post-image" />
        {/* <div className="post-image"></div> */}
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className="post-bookmark" />
        <p className="post-title">
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className="post-tag">
          <div className="post-tag-name">
            <div className="post-tag-name-fashion">#Fashion</div>
            <div className="post-tag-name-tips">#Tips</div>
          </div>
          <div className="post-time">
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className="post">
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className="post-image" />
        {/* <div className="post-image"></div> */}
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className="post-bookmark" />
        <p className="post-title">
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className="post-tag">
          <div className="post-tag-name">
            <div className="post-tag-name-fashion">#Fashion</div>
            <div className="post-tag-name-tips">#Tips</div>
          </div>
          <div className="post-time">
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className="post">
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className="post-image" />
        {/* <div className="post-image"></div> */}
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className="post-bookmark" />
        <p className="post-title">
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className="post-tag">
          <div className="post-tag-name">
            <div className="post-tag-name-fashion">#Fashion</div>
            <div className="post-tag-name-tips">#Tips</div>
          </div>
          <div className="post-time">
            <span> 4 day ago</span>
          </div>
        </div>


      </div> <div className="post">
        <img src={require('../../assets/blog/Rectangle434.png')} alt="" className="post-image" />
        {/* <div className="post-image"></div> */}
        <img src={require('../../assets/blog/Bookmark.png')} alt="" className="post-bookmark" />
        <p className="post-title">
          2021 Style Guide: The Biggest
          Fall Trends
        </p>
        <div className="post-tag">
          <div className="post-tag-name">
            <div className="post-tag-name-fashion">#Fashion</div>
            <div className="post-tag-name-tips">#Tips</div>
          </div>
          <div className="post-time">
            <span> 4 day ago</span>
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

export default BlogGridView