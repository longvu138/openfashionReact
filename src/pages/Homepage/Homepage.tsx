import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import "./homepage.scss";
const Homepage = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <img src={require("../../assets/image10.png")} alt="" />
        <div className="banner-text-1">LUXURY </div>
        <div className="banner-text-2">FASHION </div>
        <div className="banner-text-3">&amp;ACCESSORIES </div>
        <div className="banner-button">
          <button>EXPLORE COLLECTION</button>
        </div>
        <div className="banner-slide">
          <div className="banner-slide-square1" />
          <div className="banner-slide-square2" />
          <div className="banner-slide-square3" />
        </div>
      </div>
      <div className="newarrival">
        <h3>New Arrival</h3>
        <img src={require("../../assets/3.png")} className="section1" alt="" />
        <ul>
          <li>All</li>
          <li>Apparel</li>
          <li>Dress</li>
          <li>Tshirt</li>
          <li>Bag</li>
        </ul>
        <div className="newarrival-retangle" />
        <div className="newarrival-products">
          <div className="newarrival-product">
            <img src={require("../../assets/ao1.png")} alt="" />
            <div className="newarrival-product-info">
              <p className="newarrival-product-name">
                21WN reversible angora <br /> cardigan
              </p>
              <p className="newarrival-product-price">$120</p>
            </div>
          </div>
          <div className="newarrival-product">
            <img src={require("../../assets/ao2.png")} alt="" />
            <div className="newarrival-product-info">
              <p className="newarrival-product-name">
                21WN reversible angora <br /> cardigan
              </p>
              <p className="newarrival-product-price">$120</p>
            </div>
          </div>
        </div>
        <div className="newarrival-products">
          <div className="newarrival-product">
            <img src={require("../../assets/ao3.png")} alt="" />
            <div className="newarrival-product-info">
              <p className="newarrival-product-name">
                21WN reversible angora <br /> cardigan
              </p>
              <p className="newarrival-product-price">$120</p>
            </div>
          </div>
          <div className="newarrival-product">
            <img src={require("../../assets/ao4.png")} alt="" />
            <div className="newarrival-product-info">
              <p className="newarrival-product-name">
                21WN reversible angora <br /> cardigan
              </p>
              <p className="newarrival-product-price">$120</p>
            </div>
          </div>
        </div>
        <div className="explore-more">
          <h3>Explore More</h3>
          <img src={require("../../assets/Forward Arrow.png")} alt="" />
        </div>
      </div>
      <div className="all-brand">
        <img src={require("../../assets/3.png")} className="devider" alt="" />
        <div className="brand">
          <div className="brand-1">
            <img src={require("../../assets/Prada.png")} alt="" />
          </div>
          <div className="brand-2">
            <img src={require("../../assets/Burberry.png")} alt="" />
          </div>
          <div className="brand-3">
            <img src={require("../../assets/Boss.png")} alt="" />
          </div>
          <div className="brand-4">
            <img src={require("../../assets/Catier.png")} alt="" />
          </div>
          <div className="brand-5">
            <img src={require("../../assets/Gucci.png")} alt="" />
          </div>
          <div className="brand-6">
            <img src={require("../../assets/Tiffany & Co.png")} alt="" />
          </div>
        </div>
        <img src={require("../../assets/3.png")} className="devider" alt="" />
      </div>
      <div className="collections">
        <h3>Collections</h3>
        <div className="collection-10">
          <div className="collection-10-number"> 10 </div>
          <div className="collection-10-october"> October </div>
          <div className="collection-10-collection"> Collection </div>
          <img src={require("../../assets/image 12.png")} alt="" />
        </div>
        <div className="collection-8">
          <div className="collection-8-autumn"> Autumn </div>
          <div className="collection-8-collection"> Collection </div>
          <img src={require("../../assets/image 9.png")} alt="" />
        </div>
      </div>
      <div className="video">
        <img
          className="video-background"
          src={require("../../assets/image 13.png")}
          alt=""
        />
        <img
          src={require("../../assets/play.png")}
          className="video-btn-play"
          alt=""
        />
      </div>
      <div className="product">
        <h3>Just for you</h3>
        <img src={require("../../assets/3.png")} className="devider" alt="" />
        <div className="product-item">
          <div className="product-item-img1">
            <img src={require("../../assets/product1.png")} alt="" />
            <div className="product-item-img1-name">
              Harris Tweed Three button Jacket
            </div>
            <div className="product-item-img1-price">120$</div>
          </div>
          <div className="product-item-img2">
            <img src={require("../../assets/product2.png")} alt="" />
            <div className="product-item-img2-name">
              Cashmer <br /> Jacket
            </div>
          </div>
        </div>
        <div className="product-square">
          <div className="product-square-square1" />
          <div className="product-square-square2" />
          <div className="product-square-square3" />
        </div>
      </div>
      <div className="trending">
        <h3>@ Trending</h3>
        <div className="trending-tag">
          <div className="trending-tag-2021"> #2021</div>
          <div className="trending-tag-spring"> #spring</div>
          <div className="trending-tag-collection"> #collection</div>
          <div className="trending-tag-fall"> #fall</div>
        </div>
        <div className="trending-tag">
          <div className="trending-tag-dress"> #dress</div>
          <div className="trending-tag-autumncollection">
            {" "}
            #autumncollection
          </div>
          <div className="trending-tag-openfashion"> #openfashion</div>
        </div>
      </div>
      <div className="openfashion">
        <img
          className="openfashion-logo"
          src={require("../../assets/Logo.png")}
          alt=""
        />
        <div className="openfashion-text">
          <span>
            Making a luxurious lifestyle accessible <br />
            for a generous group of women is our <br />
            daily drive.
          </span>
        </div>
        <img src={require("../../assets/3.png")} className="devider" alt="" />
        <div className="openfashion-sticker">
          <div className="openfashion-sticker-1">
            <img src={require("../../assets/Miroodles Sticker.png")} alt="" />
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
          <div className="openfashion-sticker-2">
            <img src={require("../../assets/Miroodles Sticker1.png")} alt="" />
            <p>Sustainable process from start to finish.</p>
          </div>
        </div>
        <div className="openfashion-sticker">
          <div className="openfashion-sticker-3">
            <img src={require("../../assets/Miroodles Sticker2.png")} alt="" />
            <p>Unique designs and high-quality materials.</p>
          </div>
          <div className="openfashion-sticker-4">
            <img src={require("../../assets/Miroodles Sticker3.png")} alt="" />
            <p>Fast shipping. Free on orders over $25.</p>
          </div>
        </div>
        <img
          className="openfashion-sticker-end"
          src={require("../../assets/icon0000.png")}
          alt=""
        />
      </div>
      <div className="follow-us">
        <h3>Follow us</h3>
        <img
          src={require("../../assets/instagramiocn.png")}
          className="follow-us-instagram"
          alt=""
        />
        <div className="follow-us-image">
          <div className="follow-us-image-1">
            <p>@mia</p>
          </div>
          <div className="follow-us-image-2">
            <p>@_jihyn</p>
          </div>
        </div>
        <div className="follow-us-image">
          <div className="follow-us-image-3">
            <p>@mia</p>
          </div>
          <div className="follow-us-image-4">
            <p>@_jihyn</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
