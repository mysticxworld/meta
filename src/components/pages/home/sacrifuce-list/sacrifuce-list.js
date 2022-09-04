import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { Scrollbars } from 'react-custom-scrollbars-2';
import EthIcon from '../../../../assets/images/eth-icon.png'
import "./sacrifuce-list.scss";
import { type } from '@testing-library/user-event/dist/type';
import { findByAltText } from '@testing-library/react';


const SacrificeList = (props) => {
    const [txx,settxx]=useState([])
    const[fiattx,setfiattx]=useState([])
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
     var ethtx = res["data"].filter(function (entry) {
        return entry.type === 'ethereum';
    });
    var fiatx = res["data"].filter(function (entry) {
        return entry.type === 'paypal';
    });

    console.log(ethtx)
      let sortedInput = (ethtx).slice().sort((a, b) =>Number(b.value) - Number(a.value));
      console.log(sortedInput);
      let sortedfiatInput = (fiatx).slice().sort((a, b) =>Number(b.value) - Number(a.value));
    
      
      settxx(sortedInput)
      setfiattx(sortedfiatInput)
      
    })
    // .catch(error => {
    //   console.error(error);
    // });
    }


    return (
            <>
                <div className="secrifice_Outer" id="scrfList">
                    <div className="container">
                        <div className="secrificeInn">
                            <div className="secrifiList">
                                <h2>Ethereum</h2>
                                <Scrollbars className="tokensScroll">
                                {txx.map(tx =>(

                                    

                                <ul> 
                                    
                                    <li >
                                        
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                            
                                            {tx.type}
                                            
                                            <a href={"https://rinkeby.etherscan.io/tx/"+tx.id} target="_blank" style={{color:'#fff'}}>
                                                <span>transaction id</span>
                                                </a>
                                            

                                                <strong>{tx.id}</strong>
                                            </div>
                                            <div className="tokenRight">
                                           
                                                <span><img src={EthIcon} alt="" />eth</span>
                                               
                            
                                                {<span>{Number(tx.value).toFixed(4)}</span>}
                                            </div>
                                        </div>
                                        
                                    </li>
                                   
                                
                                
                                </ul>
                                ) )}
                                 
                                </Scrollbars>
                            </div>

                        
                       
                            <div className="secrifiList">
                                <h2>Fiat</h2>
                                <Scrollbars className="tokensScroll">
                                {fiattx.map(tx =>(

                                    

                                <ul> 
                                    
                                    <li >
                                        
                                        <div className="tokensOut">
                                            <div className="tokenLeft">
                                            
                                            {tx.type}
                                            
                                            <a href={"https://rinkeby.etherscan.io/tx/"+tx.id} target="_blank" style={{color:'#fff'}}>
                                                <span>transaction id</span>
                                                </a>
                                            

                                                <strong>{tx.id}</strong>
                                            </div>
                                            <div className="tokenRight">
                                           
                                                <span>USD</span>
                                               
                            
                                                {<span>{Number(tx.value).toFixed(4)}</span>}
                                            </div>
                                        </div>
                                        
                                    </li>
                                   
                                
                                
                                </ul>
                                ) )}
                                 
                                </Scrollbars>
                            

                        </div>
                        </div>
                    </div>
                </div>
            </>
    )
};

export default SacrificeList;
