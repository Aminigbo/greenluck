import React from 'react'
import bet from '../Assets/bet.jpeg'
import { FaTelegram } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from 'react-toastify';


const Tips = ({
    loading, games, code
}) => {

    const Tips = [
        {
            id: 1,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },
        {
            id: 2,
            place: 'EPL',
            time: "14:00",
            over: 'Away/Draw(x2)',
            num: '1.25',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },
        {
            id: 3,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },
        {
            id: 4,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },
        {
            id: 5,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['?', '?', '?', '?', '?'],
        },
        {
            id: 6,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', '?'],

        },
        {
            id: 7,
            place: 'LIT',
            time: "16:25",
            over: 'Over 1.5',
            num: '1.31',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },
        {
            id: 8,
            place: 'EPL',
            time: "14:00",
            over: 'Away/Draw(x2)',
            num: '1.25',
            prob: '76.34%',
            place1: 'Suduva Marijampole',
            place2: 'FK Zalgiris Vilnius',
            f1: ['D', 'D', 'L', 'L', 'W'],
            f2: ['W', 'W', 'D', 'L', 'L'],
        },



    ]


    const copyText = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                toast.success('code copied successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
            })
            .catch(err => {
                alert('Failed to copy text: ', err);
            });
    };

    return (
        <div>
             <ToastContainer
                position="top-right"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer />

            <div className="tips">
                <div className="top">
                    <h2>Bet Of The Day</h2>

                    {/* <div className="btns">
                        <button>Previous</button>
                        <button>Next</button>
                    </div> */}
                </div>

                <div className="cards">

                    <div className="cards-c">

                        {
                            games.map((item, id) => {
                                // Your timestamp
                                const timestamp = item.estimateStartTime;

                                // Create a new Date object
                                const date = new Date(timestamp);

                                // Extract the day, month, and year
                                const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
                                const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
                                const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

                                // Combine into the desired format
                                const formattedDate = `${day}/${month}/${year}`;

                                // Extract the hours and minutes
                                let hours = date.getHours();
                                const minutes = String(date.getMinutes()).padStart(2, '0');

                                // Determine AM or PM
                                const ampm = hours >= 12 ? 'PM' : 'AM';

                                // Convert 24-hour format to 12-hour format
                                hours = hours % 12;
                                hours = hours ? hours : 12; // If hours is 0, make it 12

                                // Combine into the desired time format
                                const formattedTime = `${hours}:${minutes} ${ampm}`;

                                console.log(code)
                                return (
                                    <div className="card" key={id}>

                                        <div className="card-c">
                                            <div className="flex first">
                                                <button onClick={() => {
                                                    copyText(code)
                                                }} ><span>{code}</span> </button>
                                                {/* <button><span>{"item.over"}</span> | <span>{"item.num"}1</span></button> */}
                                            </div>
                                            <div className="flex second">
                                                {/* <img src={bet} alt="" /> */}
                                                <span style={{ fontSize: 10 }}>{formattedDate + " " + formattedTime}</span>
                                                <div className="probs">
                                                    <span style={{ marginRight: 10 }} >{item.markets[0].desc} </span>
                                                    <span className='s1'> {item.markets[0].outcomes[0].desc}</span>
                                                </div>
                                            </div>

                                            <div className="flex rolling">
                                                <div className="one">
                                                    <div className="one1">
                                                        <p>H</p>
                                                    </div>
                                                    <div className="one2">
                                                        <p>{item.homeTeamName}</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="flex rolling">
                                                <div className="one">
                                                    <div className="one1">
                                                        <p>A</p>
                                                    </div>
                                                    <div className="one2">
                                                        <p>{item.awayTeamName}</p>
                                                    </div>
                                                </div>

                                                <div className="two">
                                                    <div className="rows">
                                                        {/* {item.f2.map((status, index) => (
                                                            <span key={index} style={{ backgroundColor: getBgColor(status) }}>{status}</span>
                                                        ))} */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* <div className="join">

                        <div className="j-c"> 
                            <a href='' className="ff">
                                <FaTelegram className='t-i' />
                                <span>Join Our Telegram Channel</span>

                            </a>

                            <div className="other">
                                <a href=""><button>OTHER SPORT</button></a>
                                <a href=""><button>BANKER TIPS</button></a>

                            </div>

                        </div> 
                    </div> */}

                </div>




            </div>
        </div>
    )
}

export default Tips;
