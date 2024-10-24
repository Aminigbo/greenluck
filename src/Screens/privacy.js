import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Privacy = () => {
    const [isAuth, setIsAuth] = React.useState(false)
    return (
        <div  >
            <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>See Our   <span>Privacy Policy</span> </h1>
                        <p>Read carefully </p>

                    </div>

                </div>
            </div>

            <div className="overlay">
                <div className="o-v">

                    <div style={{
                        // backgroundColor: "red"
                        marginTop: 40,
                        paddingTop: 50,
                        paddingBottom: 50,
                    }} >
                        <p>

                            At Green Luck Tips, which is the trading name of Green Luck Tips Services LTD, we are dedicated to protecting your privacy and ensuring that your personal information is safe. This privacy policy explains how we collect and use your information when you use our website.
                            We may request your name, contact information (such as your email address and phone number), and date of birth. We may also gather additional information relevant to customer surveys and offers. This information is exclusively used to provide you with better service and improve our products and services.

                            Occasionally, we may send you promotional emails and SMS messages about new products, special offers, or other interesting information. If you no longer want to receive these emails, you can contact us at info@greenlucktips.com.

                            We are committed to ensuring the security of your information and have implemented appropriate physical, electronic, and managerial procedures to safeguard and protect the data we collect online.

                            We will not sell, distribute, or lease your personal information to third parties unless required by law or with your consent.

                            If you believe that any information we have collected is incorrect or incomplete, please get in touch with us, and we will promptly correct any errors. Under the Data Protection Laws, you may also request information on personal data we have on you.

                            If you want to delete your Green Luck Tips account, please note that you will lose all associated data and content, including active subscriptions. However, you can still use Green Luck Tips services by registering with a new email address and phone number.

                            We may revise this privacy policy periodically, and it is effective as of October 2023. Please check this page regularly for any updates.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy