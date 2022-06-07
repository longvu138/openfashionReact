import Devider from '../../component/devider/Devider'
import styles from './Checkout1.module.scss'
import classNames from 'classnames/bind';
import Header1 from '../../component/header/Header1';
const cx = classNames.bind(styles);
const Checkout1 = () => {

    return (
        <div className={cx('container')}>
            <Header1 />
            <h3 className={cx('checkout')}>Checkout</h3>
            <Devider />

            <div className={cx("info")}>
                <div className={cx("info-delivery")}>
                    <div className={cx("info-delivery-name")}>
                        Iris Watson
                    </div>
                    <div className={cx("info-delivery-address")}>
                        606-3727 Ullamcorper. <br></br> Street
                        Roseville NH 11523
                    </div>
                    <div className={cx("info-delivery-phone")}>
                        (786) 713-8616
                    </div>
                </div>
                <img src={require('../../assets/checkout/Forward.png')} className={cx("info-right")} alt="" />

            </div>

            <div className={cx('hr')}></div>
            <div className={cx("master-card")}>
                <img src={require('../../assets/checkout/d.png')} className={cx("master-card-left")} alt="" />
                <p className={cx(' master-card-center')}>Master Card ending  ••••89</p>
                <img src={require('../../assets/checkout/Forward.png')} className={cx("master-card-right")} alt="" />
            </div>
            <div className={cx('hr')}></div>

            <div className={cx("cart-item")}>
                <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className={cx("cart-item-image")} />
                <div className={cx("cart-item-info")}>
                    <div className={cx("cart-item-info-name")}>
                        lamerei
                    </div>
                    <div className={cx("cart-item-info-title")}>
                        Recycle Boucle Knit Cardigan Pink
                    </div>
                    <div className={cx("cart-item-info-quantity")}>
                        <img src={require('../../assets/cart/minus.png')} alt='' className={cx("cart-item-info-quantity-minus")} />
                        <p className={cx("cart-item-info-quantity-number")}> 1 </p>
                        <img src={require('../../assets/cart/plus.png')} alt='' className={cx("cart-item-info-quantity-plus")} />
                    </div>
                    <div className={cx("cart-item-info-price")}>
                        120$
                    </div>
                </div>
            </div>
            <div className={cx("total")}>
                <p className={cx('total-text')}>TOTAL</p>
                <p className={cx('total-price')}>$240</p>
            </div>
            <div className={cx("button")}>
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className={cx('button-img-bag')} />
                <p className={cx('button-continue')}>Check OUT</p>
            </div>

        </div>
    )
}

export default Checkout1