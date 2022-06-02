import React from 'react'
import './Search.scss'
const Search = () => {
    return (
        <div className='container'>
            <div className="search-top">
                <img src={require('../../assets/search/Search.png')} className="search-icon" alt="" />
                <input type="text" className='input-search' placeholder='Search items' />
                <img src={require('../../assets/search/Close.png')} className="close-icon" alt="" />
            </div>
            <div className="hr">

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

export default Search