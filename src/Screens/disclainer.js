import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Disclaimer = () => {
    const [isAuth, setIsAuth] = React.useState(false)
    return (
        <div  >
            <Header isAuth={isAuth} setIsAuth={setIsAuth} />
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>Read Our   <span>Disclaimer</span> </h1>
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
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum is that
                            it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                            content here', making it look like readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like). It is a long established fact that a reader will
                            be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Disclaimer