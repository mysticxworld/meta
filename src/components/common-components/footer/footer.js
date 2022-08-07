import React from "react";
import Logo from '../../../assets/images/logo.png'
import FbIcon from '../../../assets/images/fb-icon.png'
import TweetIcon from '../../../assets/images/tweet-icon.png'
import "./footer.scss";


const Footer = (props) => {

    return (
            <>
                <footer id="connect">
                    <div className="container">
                        <div className="footerInn">
                            <div className="footLogo wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="footPet wow slideInDown" data-wow-duration="2s" data-wow-delay=".3s">
                                <span>Patents Pending</span>
                                <span>&copy; metame.EARTH</span>
                            </div>
                            <div className="footsocial wow slideInUp" data-wow-duration="2s" data-wow-delay=".3s">
                                <span>Read Us</span>
                                <a href=""><img src={FbIcon} alt="" /></a>
                                <a href=""><img src={TweetIcon} alt="" /></a>
                            </div>
                            <div className="footpolicy wow slideInRight" data-wow-duration="2s" data-wow-delay=".3s">
                                <p>Contact us with any questions regarding 
                                    Rentberry: <a href="">ico@metame.earth.com</a>
                                </p>
                                <span>
                                    <a href="">Privacy Policy</a><br/>
                                    <a href="">Terms and Conditions</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
    )
};

export default Footer;