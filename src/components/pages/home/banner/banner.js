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
    const web3Modal = new Web3Modal({
        network: "rinkeyby",
        theme: "dark",
        cacheProvider: true
        
      });
//   var provider=new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/");
var connection = await web3Modal.connect();
var provider=new ethers.providers.Web3Provider(connection);
  console.log(provider,"provider")
  
  var time =Math.floor(Date.now() / 1000)
  console.log(time)
  var startblock=0;
  
    axios.get('https://api-rinkeby.etherscan.io/api?module=block&action=getblocknobytime&timestamp='+time+'&closest=before&apikey=YN5AQTMPMBFFXF4SA2QHJI7HBWTT3QP5KN')
    .then(end => {
      
  var endblock=end['data'].result;
  console.log(end)

  axios
    .get('https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x15be4040E5147Cd9F8Cc4600C9D6Da720F2631Ea&startblock='+startblock+'&endblock='+endblock+'&page=1&offset=100&sort=desc&apikey=YN5AQTMPMBFFXF4SA2QHJI7HBWTT3QP5KN')
    .then(res => {
        console.log('https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=0x15be4040E5147Cd9F8Cc4600C9D6Da720F2631Ea&startblock='+startblock+'&endblock='+endblock+'&page=1&offset=100&sort=desc&apikey=YN5AQTMPMBFFXF4SA2QHJI7HBWTT3QP5KN')
      console.log(`statusCode: ${res.status}`);

      let sortedInput = (res["data"].result).slice().sort((a, b) =>Number(b.blockNumber) - Number(a.blockNumber));
      console.log(sortedInput);
      
      settxx(sortedInput)
      
    })
    .catch(error => {
      console.error(error);
    });
    }
  )}
    
     
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
                                            <a href={"https://rinkeby.etherscan.io/tx/"+tx.hash} target="_blank" style={{color:'#fff'}}>
                                                <span>transaction id</span>
                                                </a>
                                                <strong>{tx.hash}</strong>
                                            </div>
                                            <div className="tokenRight">
                                                <span><img src={EthIcon} alt="" />eth</span>
                                                {<span>{Number(ethers.utils.formatEther(tx.value)).toFixed(6)}</span>}
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