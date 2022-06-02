import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import './CollectionDetail.scss'
const CollectionDetail = () => {
    return (
        <>
            <div className="header">
                <div className="header-collections-menu">
                    <img src={require("../../assets/collections/Menu.png")} alt="" />
                </div>
                <div className="header-collections-logo">
                    <img src={require("../../assets/collections/Logo.png")} alt="" />
                </div>
                <div className="header-collections-search">
                    <img src={require("../../assets/collections/Search.png")} alt="" />
                </div>
                <div className="header-collections-cart">
                    <img src={require("../../assets/collections/shopping bag.png")} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="collection">
                    <img src={require('../../assets/collections/October.png')} className="collection-october" alt="" />
                    <img src={require('../../assets/collections/Collection.png')} className="collection-collection" alt="" />
                    <img src={require('../../assets/collections/10.png')} className="collection-10" alt="" />
                </div>
                <div className="collection-slide">
                    <img src={require('../../assets/collections/image 20.png')} className="collection-slide-image" alt="" />
                    <img src={require('../../assets/collections/11.png')} className="collection-slide-10" alt="" />
                </div>


                <div className="category">
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344.png')} className="category-item-image" alt='' />
                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />

                    </div>
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344 (1).png')} className="category-item-image" alt='' />

                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />
                    </div>
                </div>

                <div className="category">
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344 (2).png')} className="category-item-image" alt='' />
                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />

                    </div>
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344 (3).png')} className="category-item-image" alt='' />

                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />
                    </div>
                </div>

                <div className="category">
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344 (4).png')} className="category-item-image" alt='' />
                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />

                    </div>
                    <div className="category-item">
                        <img src={require('../../assets/collections/Rectangle 344 (5).png')} className="category-item-image" alt='' />

                        <h4 className="category-item-title">
                            october collection
                        </h4>
                        <p className="category-item-name">
                            reversible angora cardigan
                        </p>
                        <p className="category-item-price">
                            $120
                        </p>
                        <img src={require('../../assets/category/heart.png')} className="category-heart" alt="" />
                    </div>
                </div>

                <div className="text">You may also like</div>
                <Devider />

                <div className="product-item">
                    <div className="product-item-img1">
                        <img src={require("../../assets/collections/image 21.png")} alt="" />
                        <div className="product-item-img1-name">
                            Black Collection
                        </div>

                    </div>
                    <div className="product-item-img2">
                        <img src={require("../../assets/collections/Rectangle 441.png")} alt="" />
                        <div className="product-item-img2-name">
                            HAE BY HA
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CollectionDetail