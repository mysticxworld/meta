import React from "react";

import TeamImg1 from '../../../../assets/images/teams-img1.png'
import TeamImg2 from '../../../../assets/images/teams-img2.png'
import TeamImg3 from '../../../../assets/images/teams-img3.png'

import "./teams.scss";


const Teams = (props) => {

    return (
            <>
                <div className="teamsOuter" id="team">
                    <div className="container">
                        <div className="teamsHd">
                            <h2>Meet Our Team<span></span></h2>
                        </div>
                        <div className="teamsList">
                            <ul>
                                <li className="wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <i><img src={TeamImg1} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                                <li className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".3s">
                                    <i><img src={TeamImg2} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                                <li className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                    <i><img src={TeamImg3} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                                <li className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".5s">
                                    <i><img src={TeamImg1} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                                <li className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".6s">
                                    <i><img src={TeamImg2} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                                <li className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".7s">
                                    <i><img src={TeamImg3} alt="" /></i>
                                    <strong>Adam Smith</strong>
                                    <span>Founder &amp; CEO</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
    )
};

export default Teams;