import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Refund = () => {
    const [isAuth, setIsAuth] = React.useState(false)
    return (
        <div  >
            <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>About Our <span>Refund Policy</span> </h1>
                        <p>Read carefully</p>

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
                            The information transmitted is intended only for the persons or entity above the age of 18. Green Luck Tips do not refund money paid for subscription and not liable to any money lost or gained. Countries that betting is not legal should not subscribe to our plans. You can read through Our Terms and Conditions for more information on Green Luck Tips.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Refund