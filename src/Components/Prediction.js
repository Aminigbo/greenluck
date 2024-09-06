import React from 'react'

const Prediction = () => {
    return (
        <div>
            <div className="predict-cards">
                <div className="predict-c">
                    <h3>Other Predictions</h3>
                    <div className="p-c">
                        <button>Free 2 Odds</button>
                        <button>Banker Tips</button>
                        <button>Double Chance</button>
                        <button>Over 1.5 Goals</button>
                        <button>Over 2.5 Goals</button>
                        <button>O/U 3.5 Goals</button>
                        <button>BTTS/GG</button>
                        <button>Draws</button>
                    </div>
                </div>
            </div>


            <div className="prediction">
                <h4>Frequently Asked Questions</h4>
                <b>How accurate are the predictions?</b>
                <p>While we strive for accuracy, predictions are not 100% guaranteed due to the unpredictable nature of events.</p><br />

                <b>How are predictions made?</b>
                <p>Predictions are made using statistical analysis, historical data, players forms, Injuries and H2H.</p><br />

                <b>Can I make a request for a specific prediction?</b>
                <p>Yes, users can request predictions for specific events.</p><br />

                <b>Do I need to register to access predictions?</b>
                <p>Users can get access to the free predictions without registering, though registration are compulsory to get access to the premium games.</p><br />

                <b>Are there any fees involved?</b>
                <p>Fee are only involved for the premium subscribers.</p><br />

                <b>What should I do if a prediction is wrong?</b>
                <p>Remember, predictions are not guaranteed. It's always important to use them as a guide, not a certainty.</p><br />

                {/* <h4>Football betting predictions</h4>
                <p>Check out our full range of free football predictions for all types of bet below;</p>


                <div className="ul">
                    <ul>
                        <li><a href="">Banker of the day tips</a></li>
                        <li><a href="">Both Teams to Score tips</a></li>
                        <li><a href="">Double chance tips</a></li>
                        <li><a href="">Draws tips</a></li>
                        <li><a href="">Over 1.5 Goals tips</a></li>
                        <li><a href="">Over 2.5 Goals tips</a></li>
                    </ul>
                </div> */}


                {/* <h4>Summary</h4>
                <p><span>VictorsPredict</span> is the best prediction site that gives you access to latest and factual information on the game of football. All those who love to bet on the game, can have accurate predictions to win some quick bucks.</p> */}



            </div>
        </div>
    )
}

export default Prediction