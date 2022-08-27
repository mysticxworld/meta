import React, {useState, useEffect} from 'react'
import "./banner.scss";
import EthIcon from '../../../../assets/images/eth-icon.png'
import SacrificPopup from './sacrific-popup/sacrific-popup'
import { Scrollbars } from 'react-custom-scrollbars-2';
import axios from 'axios';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";

import Header from '../../../common-components/header/header';

const Banner = () => {
    const [txx,settxx]=useState([])
    useEffect(() => {
        
     
        gettx()
        
      }, [])

  
  async function gettx(){
//     const web3Modal = new Web3Modal({
//         network: "rinkeyby",
//         theme: "dark",
//         cacheProvider: true
        
//       });
// //   var provider=new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/");
// var connection = await web3Modal.connect();
// var provider=new ethers.providers.Web3Provider(connection);
//   console.log(provider,"provider")
  
  
    
  const article={
    'table':"transactions"
}
axios.get('https://9uyf4erjbf.execute-api.us-east-2.amazonaws.com/tts')
    .then(res => {
        
      console.log(res);
     console.log(res["data"]);
      let sortedInput = (res["data"]).slice().sort((a, b) =>Number(b.time) - Number(a.time));
      console.log(sortedInput);
      
      settxx(sortedInput)
      
    })
    // .catch(error => {
    //   console.error(error);
    // });
    }
  
    
     
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
                                {txx.map(tx =>(
                                <ul> 
                                    <li >
                                        
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                            {tx.type}
                                            {tx.type == "ethereum"?
                                            <a href={"https://rinkeby.etherscan.io/tx/"+tx.id} target="_blank" style={{color:'#fff'}}>
                                                <span>transaction id</span>
                                                </a>
                                            :
                                            <span>transaction id</span>
                                }

                                                <strong>{tx.id}</strong>
                                            </div>
                                            <div className="tokenRight">
                                            {tx.type == "ethereum"?
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                :
                                                <span>USD</span>
                            }
                                                {<span>{Number(tx.value).toFixed(4)}</span>}
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {/* <li>
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
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
                                                <span>transaction id</span>
                                                <strong>0x97Efb6f82fE14d7a0b7Aeb0a7a0b7Aeb0a</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                <span>1.058.00</span>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                                ) )}
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
export default Banner;