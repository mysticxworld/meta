import React from "react";
import HomeIcon from '../../../../assets/images/home-icon.png'
import "./toknomics.scss";


const Toknomics = (props) => {

    return (
            <>
                <div className="toknomicsOuter" id="tokno">
                    <div className="container">
                        <div className="toknoHd wow slideInDown" data-wow-duration="2s" data-wow-delay=".2s">
                            <h2>Tokenomics<span></span></h2>
                        </div>
                        <div className="toknOutBx">
                            <div className="toknoLeftBx wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                <h3>Overview</h3>
                                <ul>
                                    <li><i></i>The Architects buy $m3 and spend it making their world 3D.</li>
                                    <li><i></i>The Citizens buy $s3 (our stable coin) and spend it paying off their $s3 Smart Loan.</li>
                                    <li><i></i>The Adventures walk to locations, mine new $m3 into the system, and sell them to the Architects for fair market value.</li>
                                    <li><i></i>metame.EARTH buys $m3 to back the $m3 smart loans </li>
                                </ul>
                            </div>
                            <div className="toknoRgtBx wow slideInRight" data-wow-duration="2s" data-wow-delay=".3s">
                                <h3>Daily Login Bonus Awarded in Three Tiers:</h3>
                                <ul>
                                    <li>1 x login bonus for no data sharing</li>
                                    <li>2. 3 x login bonus for mid-tier data sharing</li>
                                    <li>3. 5 x login bonus for high data sharing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
};

export default Toknomics;