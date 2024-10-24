import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/greenluckLogoWhite.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { auth } from '../config/firebase';

const Header = ({ isAuth, setIsAuth }) => {
    let Navigation = useNavigate()
    const [drop, setDrop] = useState(false)

    const handleDrop = () => {
        setDrop(!drop);
    }


    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setDropdownOpen(!isDropdownOpen);
        document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    }

    const closeMenuBar = () => {
        setClick(false);
        document.body.style.overflow = 'auto'; // Enable scrolling

    };

    const handleLogout = async () => {
        try {
            await auth.signOut()
            // setIsAuth(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {console.log(isAuth)}
            <header>
                <nav>
                    <img src={logo} alt="" />

                    <div className='bars' onClick={handleClick}>
                        {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                    </div>

                    <ul className={click ? 'menu active' : 'menu'}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/privacy" >Privacy Policy</Link></li>
                        <li><Link to="/disclaimer">Discliamer</Link></li>
                        <li><Link to="/about" >About us</Link></li>

                        <div id="btns">
                            {isAuth ? <>
                                <button style={{ backgroundColor: "crimson" }} onClick={handleLogout} >Logout</button>
                            </> : <>
                                <button onClick={() => {
                                    Navigation("login")
                                }} >Sign In</button>
                                <button onClick={() => {
                                    Navigation("register")
                                }} >Sign Up</button>
                            </>}

                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header