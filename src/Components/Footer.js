import React from 'react'
import download from '../Assets/andriod2.webp'
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
        <footer style={{backgroundColor:"#034203"}} >
            <div className="foot">
                <div className="foot1">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">WhatsApp</a></li>
                        <li><a href="">Telegram</a></li>
                        <li><a href="">Twitter</a></li> 
                    </ul>
                </div>

                <div className="foot1">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/privacy">TERMS & CONDITIONS</a></li>
                        <li><a href="/disclaimer">DISCLAIMER</a></li>
                        <li><a href="/about">ABOUT US</a></li>
                        <li><a href="/refund">Refund Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="foot1">
                    <h4>Contact Us</h4>
                     
                    <p>Email Us: Greenlucktips@gmail.com</p>
                    {/* <p>Advert: advert@victorspredict.com</p> */}
                </div>

                 

            </div>

            <div className="right">
                <p>© Copyright © 2023, Green Luck Tips - All Right Reserved</p>
            </div>

        </footer>
    </div>
  )
}

export default Footer