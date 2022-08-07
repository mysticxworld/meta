import React, { Component } from 'react'
import HomeIcon from '../../../../assets/images/home-icon.png'
import "./how-it-work.scss";


export default class HowitWork extends Component {
    

        render() { 
    return (
            <>
                <div className="howitOuter" id='howit'>
                    <div className="container">
                        <div className="howitHd wow slideInDown" data-wow-duration="2s" data-wow-delay=".2s">
                            <h2>How It Works<span></span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                        <div className="howitList">
                            <ul>
                                <li className="howit wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                                <li className="howit wow slideInUp" data-wow-duration="2s" data-wow-delay=".3s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                                <li className="howit wow slideInRight" data-wow-duration="2s" data-wow-delay=".4s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                                <li className="howit wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                                <li className="howit wow slideInUp" data-wow-duration="2s" data-wow-delay=".3s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                                <li className="howit wow slideInRight" data-wow-duration="2s" data-wow-delay=".4s">
                                    <div className="howitBx">
                                        <i><img src={HomeIcon} alt="" /></i>
                                        <h3>Lorem ipsum dolor sit ametel facilisis.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="loadmoreBtn">
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </>
    )
}
}

