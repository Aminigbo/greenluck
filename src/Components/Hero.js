import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default styles


const Hero = ({ banners }) => {
    return (
        <div>
            <div className='hero'>
                <div className="hh">
                    <div className="h-c">

                        <h1>Green Luck <span>Predictions</span> and Tips</h1>
                        <p>Users can get access to the free predictions without registering, though registration are compulsory to get access to the premium games.</p>
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
                        infiniteLoop={true}
                        interval={2000}
                        
                    >
                        {banners.map((item, index) => {
                            console.log(item)
                            return <>

                                <div>
                                    <img id="Carousel-img" style={{
                                        // height: 200,
                                        width: "100%"
                                    }} src={item.url} alt="Slide 1" />
                                    {/* <p className="legend">Legend 1</p> */}
                                </div> 
                            </>
                        })}
                    </Carousel>
                    {/* </div> */}

                </div>
            </div>
        </div>
    )
}

export default Hero