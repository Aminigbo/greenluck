import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles


const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>Free Soccer <span>Predictions</span> and Tips</h1>
                        <p>VictorsPredict is an online service that provides free soccer tips and predictions for football fans around the world, free analysis, Banker tips, latest results, and many more.</p>
                    </div>

                </div>
            </div>

            <div className="overlay">
                <div className="o-v">
                    {/* <button>Free Tips</button>
                <button>Banker Tips</button>
                <button>Free 2 Odds</button>
                <button>Double Chance</button>
                <button>Over 1.5 Goals</button>
                <button>Over 2.5 Goals</button>
                <button>O/U 2.5 Goals</button>
                <button>BTTS/G</button>
                <button>Draws</button> */}
                    {/* <div style={{ maxWidth: '600px', margin: '0 auto' }}> */}
                    <Carousel
                        autoPlay={true}
                        dynamicHeight={true}
                        showThumbs={false}
                        showIndicators={false}
                    >
                        <div>
                            <img id="Carousel-img" style={{
                                // height: 200,
                                width: "100%"
                            }} src="https://blog.coupondunia.in/wp-content/uploads/2018/06/Football-Predict-and-Win-Banner_1500-x-500-1050x350.jpg" alt="Slide 1" />
                            {/* <p className="legend">Legend 1</p> */}
                        </div>
                        <div>
                            <img   id="Carousel-img" src="https://via.placeholder.com/600x400" alt="Slide 2" />
                            {/* <p className="legend">Legend 2</p> */}
                        </div>
                        <div>
                            <img  id="Carousel-img" src="https://via.placeholder.com/600x400" alt="Slide 3" />
                            {/* <p className="legend">Legend 3</p> */}
                        </div>
                    </Carousel>
                    {/* </div> */}

                </div>
            </div>
        </div>
    )
}

export default Hero