import React, { Component } from 'react';
import { Routes, Route} from "react-router-dom";


import Home from '../components/pages/home/home';

export default class Layout extends Component {
   
    render() {
        return (
            <Routes>
                {/* public access url */}
                <Route path="/" element={<Home />} />
            </Routes>
        )
        
    }
}