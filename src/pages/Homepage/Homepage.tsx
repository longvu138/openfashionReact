import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import classNames from 'classnames/bind';
import styles from './homepage.module.scss';
const cx = classNames.bind(styles);
const Homepage = () => {
  return (
    <>
      <Header />
      <div className={cx("banner")}>
        <img src={require("../../assets/image10.png")} alt="" />
        <div className={cx("banner-text-1")}>LUXURY </div>
        <div className={cx("banner-text-2")}>FASHION </div>
        <div className={cx("banner-text-3")}>&amp;ACCESSORIES </div>
        <div className={cx("banner-button")}>
          <button>EXPLORE COLLECTION</button>
        </div>
        <div className={cx("banner-slide")}>
          <div className={cx("banner-slide-square1")} />
          <div className={cx("banner-slide-square2")} />
          <div className={cx("banner-slide-square3")} />
        </div>
      </div>
      <div className={cx("newarrival")}>
        <h3>New Arrival</h3>
        <img src={require("../../assets/3.png")} className={cx("section1")} alt="" />
        <ul>
          <li>All</li>
          <li>Apparel</li>
          <li>Dress</li>
          <li>Tshirt</li>
          <li>Bag</li>
        </ul>
        <div className={cx("newarrival-retangle")} />
        <div className={cx("newarrival-products")}>
          <div className={cx("newarrival-product")}>
            <img src={require("../../assets/ao1.png")} alt="" />
            <div className={cx("newarrival-product-info")}>
              <p className={cx("newarrival-product-name")}>
                21WN reversible angora <br /> cardigan
              </p>
              <p className={cx("newarrival-product-price")}>$120</p>
            </div>
          </div>
          <div className={cx("newarrival-product")}>
            <img src={require("../../assets/ao2.png")} alt="" />
            <div className={cx("newarrival-product-info")}>
              <p className={cx("newarrival-product-name")}>
                21WN reversible angora <br /> cardigan
              </p>
              <p className={cx("newarrival-product-price")}>$120</p>
            </div>
          </div>
          <div className={cx("newarrival-product")}>
            <img src={require("../../assets/ao3.png")} alt="" />
            <div className={cx("newarrival-product-info")}>
              <p className={cx("newarrival-product-name")}>
                21WN reversible angora <br /> cardigan
              </p>
              <p className={cx("newarrival-product-price")} > $120</p>
            </div>
          </div>
          <div className={cx("newarrival-product")} >
            <img src={require("../../assets/ao4.png")} alt="" />
            <div className={cx("newarrival-product-info")}>
              <p className={cx("newarrival-product-name")}>
                21WN reversible angora <br /> cardigan
              </p>
              <p className={cx("newarrival-product-price")} > $120</p>
            </div >
          </div >
        </div >
        <div className={cx("explore-more")}>
          <h3>Explore More</h3>
          <img src={require("../../assets/Forward Arrow.png")} alt="" />
        </div >
      </div >
      <div className={cx("all-brand")}>
        <img src={require("../../assets/3.png")} className={cx("devider")} alt="" />
        <div className={cx("brand")} >
          <div className={cx("brand-1")}>
            <img src={require("../../assets/Prada.png")} alt="" />
          </div >
          <div className={cx("brand-2")} >
            <img src={require("../../assets/Burberry.png")} alt="" />
          </div >
          <div className={cx("brand-3")} >
            <img src={require("../../assets/Boss.png")} alt="" />
          </div >
          <div className={cx("brand-4")} >
            <img src={require("../../assets/Catier.png")} alt="" />
          </div >
          <div className={cx("brand-5")}>
            <img src={require("../../assets/Gucci.png")} alt="" />
          </div >
          <div className={cx("brand-6")} >
            <img src={require("../../assets/Tiffany & Co.png")} alt="" />
          </div >
        </div >
        <img src={require("../../assets/3.png")} className={cx("devider")} alt="" />
      </div >
      <div className={cx("collections")} >
        <h3>Collections</h3>
        <div className={cx("collection-10")}>
          <div className={cx("collection-10-number")}> 10 </div>
          <div className={cx("collection-10-october")}> October </div>
          <div className={cx("collection-10-collection")}> Collection </div>
          <img src={require("../../assets/image 12.png")} alt="" />
        </div >
        <div className={cx("collection-8")}>
          <div className={cx("collection-8-autumn")}> Autumn </div >
          <div className={cx("collection-8-collection")}> Collection </div >
          <img src={require("../../assets/image 9.png")} alt="" />
        </div >
      </div >
      <div className={cx("video")} >
        <img
          className={cx("video-background")}
          src={require("../../assets/image 13.png")}
          alt=""
        />
        <img
          src={require("../../assets/play.png")}
          className={cx("video-btn-play")}
          alt=""
        />
      </div >
      <div className={cx("product")}>
        <h3>Just for you</h3>
        <img src={require("../../assets/3.png")} className={cx("devider")} alt="" />
        <div className={cx("product-item")}>
          <div className={cx("product-item-img1")}>
            <img src={require("../../assets/product1.png")} alt="" />
            <div className={cx("product-item-img1-name")}>
              Harris Tweed Three button Jacket
            </div>
            <div className={cx("product-item-img1-price")}>120$</div>
          </div>
          <div className={cx("product-item-img2")}>
            <img src={require("../../assets/product2.png")} alt="" />
            <div className={cx("product-item-img2-name")}>
              Cashmer <br /> Jacket
            </div>
          </div>
        </div>
        <div className={cx("product-square")}>
          <div className={cx("product-square-square1")} />
          <div className={cx("product-square-square2")} />
          <div className={cx("product-square-square3")} />
        </div>
      </div>
      <div className={cx("trending")}>
        <h3>@ Trending</h3>
        <div className={cx("trending-tag")}>
          <div className={cx("trending-tag-2021")}> #2021</div>
          <div className={cx("trending-tag-spring")}> #spring</div>
          <div className={cx("trending-tag-collection")}> #collection</div>
          <div className={cx("trending-tag-fall")}> #fall</div>
          <div className={cx("trending-tag-dress")}> #dress</div>
          <div className={cx("trending-tag-autumncollection")}>#autumncollection</div>
          <div className={cx("trending-tag-openfashion")}> #openfashion</div>
        </div>
      </div>
      <div className={cx("openfashion")}>
        <img
          className={cx("openfashion-logo")}
          src={require("../../assets/Logo.png")}
          alt=""
        />
        <div className={cx("openfashion-text")}>
          <span>
            Making a luxurious lifestyle accessible <br />
            for a generous group of women is our <br />
            daily drive.
          </span>
        </div>
        <img src={require("../../assets/3.png")} className={cx("devider")} alt="" />
        <div className={cx("openfashion-sticker")}>
          <div className={cx("openfashion-sticker-1")}>
            <img src={require("../../assets/Miroodles Sticker.png")} alt="" />
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
          <div className={cx("openfashion-sticker-2")}>
            <img src={require("../../assets/Miroodles Sticker1.png")} alt="" />
            <p>Sustainable process from start to finish.</p>
          </div>
        </div>
        <div className={cx("openfashion-sticker")}>
          <div className={cx("openfashion-sticker-3")}>
            <img src={require("../../assets/Miroodles Sticker2.png")} alt="" />
            <p>Unique designs and high-quality materials.</p>
          </div>
          <div className={cx("openfashion-sticker-4")}>
            <img src={require("../../assets/Miroodles Sticker3.png")} alt="" />
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
        </div>
        <img
          className={cx("openfashion-sticker-end")}
          src={require("../../assets/icon0000.png")}
          alt=""
        />
      </div>
      <div className={cx("follow-us")}>
        <h3>Follow us</h3>
        <img
          src={require("../../assets/instagramiocn.png")}
          className={cx("follow-us-instagram")}
          alt=""
        />
        <div className={cx("follow-us-image")} >
          <div className={cx("follow-us-image-1")} >
            <p>@mia</p>
          </div>
          <div className={cx("follow-us-image-2")} >
            <p>@_jihyn</p>
          </div>
          <div className={cx("follow-us-image-3")} >
            <p>@mia</p>
          </div>
          <div className={cx("follow-us-image-4")}>
            <p>@_jihyn</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
