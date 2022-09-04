import React, { Component } from 'react'
import WOW from 'wowjs';
import "../home/home.scss"
import Header from '../../common-components/header/header'
import Banner from '../home/banner/banner'
import Marquee from '../home/marquee/marquee'
import SecrificeList from '../home/sacrifuce-list/sacrifuce-list'
import Mission from '../home/mission/mission'
import Roadmap from '../home/roadmap/roadmap'
import HowItWork from '../home/how-it-work/how-it-work'
import Toknomics from '../home/toknomics/toknomics'
import Teams from '../home/teams/teams'
import Footer from '../../common-components/footer/footer'

export default class Home extends Component {

    componentDidMount() {
        new WOW.WOW().init();
      }

    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Marquee />
                <SecrificeList />
                <Mission />
                <Roadmap />
                <HowItWork />
                <Toknomics />
                <Teams />
                <Footer />
            </div>
        )
    }

}

