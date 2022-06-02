import React from 'react'
import Devider from '../../component/Devider/Devider'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import './Contact.scss'
const Contact = () => {
    return (
        <div className='container'>
            <Header />
            <div className="title">Contact Us</div>
            <Devider />

            <div className="chatmessage">
                <img src={require('../../assets/contact/Chat Message.png')} className="chatmessage-image" alt="" />
                <p className='chatmessage-text'>Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.</p>
            </div>

            <div className="button-chatmessage">
                <p >Chat With Us</p>
            </div>

            <div className="chatmessage">
                <img src={require('../../assets/contact/Add Message.png')} className="chatmessage-image" alt="" />
                <p className='chatmessage-text'>You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.</p>
            </div>

            <div className="button-textus">
                <p >Text Us</p>
            </div>

            <div className="chatmessage">
                <img src={require('../../assets/contact/Twitter.png')} className="chatmessage-image" alt="" />
                <p className='chatmessage-text'>To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!</p>
            </div>

            <Footer />
        </div>
    )
}

export default Contact