import React, {useState, useEffect} from 'react'
import EthIcon from '../../../../assets/images/eth-icon.png'
import Marquee from "react-fast-marquee";
import axios from 'axios';
import "./marquee.scss";


const MarqueeList = (props) => {
       return (
            <>
                <div className="marqueeOuter">
                    <div className="container">
                        <Marquee>
                            <div className="marqueeListinn">
                                <ul>
                                    <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                                <small>ethereum</small>
                                                <span>transaction id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                                <small>ethereum</small>
                                                <span>transaction id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                                <small>ethereum</small>
                                                <span>transaction id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                                <small>ethereum</small>
                                                <span>transaction id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </>
    )
};

export default MarqueeList;