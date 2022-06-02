import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './Search_view.scss'
const Search_view = () => {
    return (
        <div className='container'>
            <Header />

            <div className="search-top">
                <input type="text" className='input-search' placeholder='Dress' />
                <img src={require('../../assets/search/Close.png')} className="close-icon" alt="" />
                {/* <span className="search-icon">X</span> */}
                <img src={require('../../assets/search/Search.png')} className="search-icon" alt="" />
            </div>
            <div className="hr"></div>

            <div className="filter">
                <div className="filter-count">
                    8 result of dress
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

            <div className="category">
                <div className="category-item">
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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
                    <img src={require('../../assets/category/imageCategory.png')} className="category-item-image" alt='' />
                    <h4 className="category-item-title">
                        21WN
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

export default Search_view