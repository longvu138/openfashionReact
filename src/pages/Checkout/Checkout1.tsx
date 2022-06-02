import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import './Checkout1.scss'
const Checkout1 = () => {

    return (
        <div className='container'>
            <Header />
            <h3 className='checkout'>Checkout</h3>
            <Devider />

            <div className="info">
                <div className="info-delivery">
                    <div className="info-delivery-name">
                        Iris Watson
                    </div>
                    <div className="info-delivery-address">
                        606-3727 Ullamcorper. <br></br> Street
                        Roseville NH 11523
                    </div>
                    <div className="info-delivery-phone">
                        (786) 713-8616
                    </div>
                </div>
                <img src={require('../../assets/checkout/Forward.png')} className="info-right" alt="" />

            </div>

            <div className='hr'></div>
            <div className="master-card">
                <img src={require('../../assets/checkout/d.png')} className="master-card-left" alt="" />
                <p className=' master-card-center'>Master Card ending  ••••89</p>
                <img src={require('../../assets/checkout/Forward.png')} className="master-card-right" alt="" />
            </div>
            <div className='hr'></div>

            <div className="cart-item">
                <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className="cart-item-image" />
                <div className="cart-item-info">
                    <div className="cart-item-info-name">
                        lamerei
                    </div>
                    <div className="cart-item-info-title">
                        Recycle Boucle Knit Cardigan Pink
                    </div>
                    <div className="cart-item-info-quantity">
                        <img src={require('../../assets/cart/minus.png')} alt='' className="cart-item-info-quantity-minus" />
                        <p className="cart-item-info-quantity-number"> 1 </p>
                        <img src={require('../../assets/cart/plus.png')} alt='' className="cart-item-info-quantity-plus" />
                    </div>
                    <div className="cart-item-info-price">
                        120$
                    </div>
                </div>
            </div>
            <div className="total">
                <p className='total-text'>TOTAL</p>
                <p className='total-price'>$240</p>
            </div>
            <div className="button">
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className='button-img-bag' />
                <p className='button-continue'>Check OUT</p>
            </div>

        </div>
    )
}

export default Checkout1