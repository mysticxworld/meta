import React, { Component } from 'react'

import "./roadmap.scss";

 export default class Roadmap extends Component {

render() {  
    return (
            <>
                <div className="roadmapOuter" id='roadmap'>
                    <div className="container">
                        <div className="roadmapCont">
                            <h2 className="roadHd wow SlideInUp" data-wow-duration="2s" data-wow-delay=".2s">Roadmap</h2>
                            <div className="roadmapList">
                                <i className="yearTag">2022</i>
                                <ul>
                                    <li className="wow slideInLeft" data-wow-duration="2s" data-wow-delay=".2s">
                                        <div className="rodmapLft rodmapBx">
                                            <h3>Hardware</h3>
                                            <ul>
                                                <li>Node,</li>
                                                <li>Cold vault,</li>
                                                <li>Hot Transfer,</li>
                                                <li>Hot wallet,</li>
                                                <li>Cold Data,</li>
                                                <li>martphone user interfaces for node control</li>
                                                <li>Radio transmitter and receiver  </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="rhtalign wow slideInRight" data-wow-duration="2s" data-wow-delay=".2s">
                                        <div className="rodmapRgt rodmapBx">
                                            <h3>DApp</h3>
                                            <ul>
                                                <li>Up to 14000-day Staking</li>
                                                <li>Smart contracts for the metaverse</li>
                                                <li>Tokenomics</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="wow slideInLeft" data-wow-duration="2s" data-wow-delay=".4s">
                                        <div className="rodmapLft rodmapBx">
                                            <h3>L1 Blockchain</h3>
                                            <ul>
                                                <li>Nodes - Shipped to every owner</li>
                                                <li>Validators - Home Owner</li>
                                                <li>Accounts</li>
                                                <li>Transactions</li>
                                                <li>Proof of work - mined via location sensor</li>
                                                <li>Context</li>
                                                <li>Store</li>
                                                <li>Encoding</li>
                                                <li>RPC and endpoint</li>
                                                <li>API</li>
                                                <li>Test Net</li>
                                                <li>Tokenomics</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="rhtalign wow slideInRight" data-wow-duration="2s" data-wow-delay=".4s">
                                        <div className="rodmapRgt rodmapBx">
                                            <h3>Explorer App</h3>
                                            <ul>
                                                <li>Interface</li>
                                                <li>Tokenomics</li>
                                                <li>3D lidar scanner</li>
                                                <li>SDK</li>
                                                <li>Google map API</li>
                                                <li>Check TX</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}
}

