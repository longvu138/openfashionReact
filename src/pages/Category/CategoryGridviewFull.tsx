import React from 'react'
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import './CategoryGridviewFull.scss';
const CategoryGridviewFull = () => {
    return (
        <div className='container'>
            <Header />
            <div className="filter">
                <div className="filter-count">
                    4500 Apparel
                </div>
                <div className="filter-option">
                    <div className="filter-option-select">
                        <span>New <img src={require('../../assets/category/Polygon 1.png')} alt="" /></span>
                    </div>
                    <div className="filter-option-listview">
                        <img src={require('../../assets/category/Listview.png')} alt="" />
                    </div>
                    <div className="filter-option-filter">
                        <img src={require('../../assets/category/Filter.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className="tag">
                <div className="tag-women">
                    Womem <span>x</span>
                </div>
                <div className="tag-all">
                    All Appavel <span>x</span>
                </div>
            </div>

            <div className="product">
                <img src={require('../../assets/category/image 15.png')} className="product-image" alt="" />
                <div className="product-info">
                    <p className="product-info-title">
                        MOHAN
                    </p>
                    <div className="product-info-name">
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className='product-heart' alt="" />
            </div>

            <div className="product">
                <img src={require('../../assets/category/image 15.png')} className="product-image" alt="" />
                <div className="product-info">
                    <p className="product-info-title">
                        MOHAN
                    </p>
                    <div className="product-info-name">
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className='product-heart' alt="" />
            </div>

            <div className="product">
                <img src={require('../../assets/category/image 15.png')} className="product-image" alt="" />
                <div className="product-info">
                    <p className="product-info-title">
                        MOHAN
                    </p>
                    <div className="product-info-name">
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className='product-heart' alt="" />
            </div>

            <div className="product">
                <img src={require('../../assets/category/image 15.png')} className="product-image" alt="" />
                <div className="product-info">
                    <p className="product-info-title">
                        MOHAN
                    </p>
                    <div className="product-info-name">
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className='product-heart' alt="" />
            </div>

            <div className="product">
                <img src={require('../../assets/category/image 15.png')} className="product-image" alt="" />
                <div className="product-info">
                    <p className="product-info-title">
                        MOHAN
                    </p>
                    <div className="product-info-name">
                        Recycle Boucle Knit Cardigan Pink
                        <span>
                            120$
                        </span>
                    </div>

                </div>
                <img src={require('../../assets/category/heart.png')} className='product-heart' alt="" />
            </div>
            <div className="paginate">
                <div className="paginate-one">1</div>
                <div className="paginate-one">2</div>
                <div className="paginate-one">3</div>
                <div className="paginate-one">4</div>
                <div className="paginate-one">5</div>
                <div className="paginate-iconnext">
                    <img src={require('../../assets/category/Forward.png')} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CategoryGridviewFull