import React, {useState, useEffect} from 'react'
import "./banner.scss";
import EthIcon from '../../../../assets/images/eth-icon.png'
import SacrificPopup from './sacrific-popup/sacrific-popup'
import { Scrollbars } from 'react-custom-scrollbars-2';
import axios from 'axios';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";

const Banner = () => {
    const [txx,settxx]=useState([])
    useEffect(() => {
        gettx()
      }, [])
    async function gettx(){
    const web3Modal = new Web3Modal({
        network: "rinkeby",
        theme: "dark",
        cacheProvider: true
        
      });
      var connection = await web3Modal.connect();
      var provider=new ethers.providers.Web3Provider(connection);
  var endblock=provider.getBlockNumber()
  var startblock=31441651
  
  axios
    .get('https://api.polygonscan.com/api?module=account&action=txlist&address=0x35ba6e183760c9f0e641c66bfefedff91bf82377&startblock='+startblock+'&endblock='+endblock+'&page=1&offset=10&sort=asc&apikey=IACEU4ET6SWC5S6Y3GT6K4ZMFT44VEX5KK')
    .then(res => {
        console.log()
      console.log(`statusCode: ${res.status}`);
      // let sortedInput = (res.stringify()).slice(10).sort((a, b) => b.id - a.id);
      // console.log(sortedInput);
      console.log(res['data'].result,typeof(res));
      settxx(res['data'].result)
    })
    .catch(error => {
      console.error(error);
    });
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
                                            <a href={"https://polygonscan.com/tx/"+tx.hash} style={{color:'#fff'}}>
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