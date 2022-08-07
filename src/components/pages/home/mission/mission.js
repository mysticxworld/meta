import React from "react";
import videoImg from '../../../../assets/images/video-img.png'
import playIcon from '../../../../assets/images/video-play-icon.png'

import "./mission.scss";


const Mission = (props) => {

    return (
            <>
                <div className="missionOuter" id="mission">
                    <div className="container">
                        <div className="missionInn">
                            <div className="missionLeft wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <img src={videoImg} alt="" />
                                <button><img src={playIcon} alt="" /></button>
                            </div>
                            <div className="missionRight wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <h2>Mission and Vision</h2>
                                <p>Provide global transaction finality for real estate and abolish rent as a byproduct.</p>
                                <p className="last">To support humanity through sustainable money, food, and shelter systems that are trustless, permissionless, and completely decentralized.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
};

export default Mission;