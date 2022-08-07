import React, { Component } from 'react'
import "./banner.scss";
import EthIcon from '../../../../assets/images/eth-icon.png'
import SacrificPopup from './sacrific-popup/sacrific-popup'
import { Scrollbars } from 'react-custom-scrollbars-2';

export default class Banner extends Component {
    

render() {      
    return (
            <>
                <div className="BannerOuter">
                    <div className="bannerLeft wow slideInLeft" data-wow-duration="2s" data-wow-delay=".2s">
                        <div className="banLftBx">
                            <h2>Let's explore<br/>
                                create share explore<br/>
                                the real-world<br/>
                                metaverse, together.
                            </h2>
                            <button>light paper</button>
                        </div>
                    </div>
                    <div className="bannerRight wow slideInRight" data-wow-duration="2s" data-wow-delay=".2s">
                        <div className="tokensListOuter">
                            <div className="tokensOuter">
                                <Scrollbars className="tokensScroll">
                                <ul>
                                    <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                                <span>token id</span>
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
                                                <span>token id</span>
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
                                                <span>token id</span>
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
                                                <span>token id</span>
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
                                                <span>token id</span>
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
                                                <span>token id</span>
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
                                                <span>token id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                </Scrollbars>
                                <div className="bggradient">&nbsp;</div>
                            </div>
                            <div className="sacrifcBtn">
                                <SacrificPopup/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}

}