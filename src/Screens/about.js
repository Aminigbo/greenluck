import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const About = () => {
    const [isAuth, setIsAuth] = React.useState(false)
    return (
        <div  >
            <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>About Us <span>And Our Predictions</span> </h1>
                        <p>Read more about us</p>

                    </div>

                </div>
            </div>

            <div className="overlay">
                <div className="o-v">

                    <div style={{
                        // backgroundColor: "red"
                        marginTop:40,
                        paddingTop:50,
                        paddingBottom:50,
                    }} >
                        <p>
                            At greenlucktips.com, We set a benchmark of making provision of safe and accurate football tips you can trust! Green Luck Tips predictions, tips & analysis are based on algorithms, detailed analysis, betting tips, forms and statistics. We have dedicated experts that are passionate in ensuring you make profits!
                            We provide you with the most accurate and guaranteed football tips everyday of the week. We are relentless in our drive to assist many bettors make good use of the tips we provide to guarantee profits. Our strong presence in Nigeria, Kenya, Tanzania, South Africa, Uganda, Cyprus, Russia, United Kingdom, USA and other European countries makes us the number destination for all things related to soccer forecasts.

                            Our tipsters at Green Luck Tips  offer predictions for over 60 leagues. We are thorough in our work and have the success of our users in mind. We promise to aid you in your bets!

                            Wonder less we are considered the Home of Soccer Predictions!
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About