import React from 'react'
import './Search_recent.scss'
const Search_recent = () => {
    return (
        <div className='container'>
            <div className="search-top">
                <img src={require('../../assets/search/Search.png')} className="search-icon" alt="" />
                <input type="text" className='input-search' placeholder='Search items' />
                <img src={require('../../assets/search/Close.png')} className="close-icon" alt="" />
            </div>
            <div className="hr">

            </div>
            <div className="recent-search">
                <p className='recent-search-text'>Recent search</p>
                <div className="recent-search-tag">
                    <div className="recent-search-tag-dress">
                        Dress <span> x</span>
                    </div>
                    <div className="recent-search-tag-collection">
                        Collection <span> x</span>
                    </div>
                    <div className="recent-search-tag-nike">
                        Nike <span> x</span>
                    </div>
                </div>
            </div>

            <div className="search-terms">
                <p className="search-terms-text">
                    Popular search terms
                </p>
                <div className="search-terms-list">
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

export default Search_recent