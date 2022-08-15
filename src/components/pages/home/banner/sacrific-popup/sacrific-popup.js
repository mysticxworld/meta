import React,{useState}from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Thankyou from '../thankyou/thankyou'
import ethIcon from '../../../../../assets/images/eth-icon.png'
import { ethers } from 'ethers';
import Web3Modal from "web3modal";


const SpecificPopup = () => {
 
  const [modal,setmodal]= useState(false); 
  const [tcc,settcc]= useState(""); 
  
  const [value,setvalue]= useState(0); 
  function toggle() {
    setmodal(!modal);

  };
  const handleChange = event => {
    setvalue(event.target.value);
 
    console.log('value is:', event.target.value);
  };
  


  async function send(amount){
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      theme: "dark",
      cacheProvider: true
      
    });
    var connection = await web3Modal.connect();
    var provider=new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    
    const tx =await signer.sendTransaction({
      to: "0x15be4040E5147Cd9F8Cc4600C9D6Da720F2631Ea",
      value: ethers.utils.parseEther(amount.toString())
    
  });
  const txw = await tx.wait();
  settcc(Thankyou);
  }
 
    return (
      <div>
        <Button color="danger" onClick={() => toggle()}>Sacrifice</Button>
        <Modal isOpen={modal} toggle={() => toggle()} className="modalOuter">
          <ModalFooter>
            <Button className='popcloseBtn' onClick={() => toggle()}>X</Button>
          </ModalFooter>
          <ModalBody>
              <div className='sacrificBx'>
                <h2>Sacrifice for a Cause</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='scrifiBtn'>
                  <button onClick={() =>setvalue(1)}>1</button>
                  <button onClick={() =>setvalue(5)}>5</button>
                  <button onClick={() =>setvalue(10)}>10</button>
                  <button onClick={() =>setvalue(15)}>15</button>
                  <button onClick={() =>setvalue(25)}>25</button>
                  <button onClick={() =>setvalue(50)}>50</button>
                  <button onClick={() =>setvalue(100)}>100</button>
                </div>
                <div className='scrifValue'>
                  <input type="text" name='name' className='scrifInp' placeholder='Enter Value' value={value}   onChange={handleChange}/>
                  <img src={ethIcon} alt="" />
                </div>
                {/* <div className='scrifValue'>
                  <input type="text" name='name' className='scrifInp' placeholder='Enter Email Address' />
                </div> */}
                <div className='srcfBtnBx' onClick={() => send(value)}>
                <Thankyou/>
                
                </div>
                <p>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                 
              </div>
          </ModalBody>
          
        </Modal>
      </div>
    );
  }


export default SpecificPopup;