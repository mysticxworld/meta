import React, { useState, useEffect } from 'react';
import {Collapse, Navbar, NavbarToggler,NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logo from '../../../assets/images/logo.png'
import SacrificPopup from '../../pages/home/banner/sacrific-popup/sacrific-popup'
import "./header.scss"
import { ethers } from 'ethers';
import Web3Modal from "web3modal";



const Header = () => {
  const [toggle,settoggle]=useState(false);
  const[activeClass,setactiveClass]=useState("");
 function togglee(){
  settoggle(true);
 }
  window.addEventListener('scroll', () => {
       setactiveClass('fixed');
       if(window.scrollY === 0){
           setactiveClass('normal');
       }
       
    });
    
  const [CconnectWallet, setCconnectWallet] = useState("Connect")
  const [connected, setconnected] = useState()
  const [walletAddress, setWalletAddress] = useState("")
  useEffect(() => {
    const localStorageData = localStorage.getItem("walletDetails");
    console.log("Users wallet is connected", localStorageData);
    if (localStorageData) {
      setCconnectWallet("Disconnect");
    }
  }, []);
  

  async function checkchain(){

    if(!connected){
      
      const chainId = 4 // Rinkeby Mainnet
      console.log(window.ethereum.networkVersion)
    if (window.ethereum.networkVersion !== chainId) {
          try {
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId:"0x4" }]
            });
          } catch (err) {
            console.log(err)
            if (err.code === 4902) {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainName: ' rinkeby Mainnet',
                    chainId: "0x4",
                    nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                    rpcUrls: ['https://rinkeby.infura.io/v3']
                  }
                ]
              });
            }
          }
        }
  }
}
  
  async function connectwallet() {

  const chainId = 4 // Rinkeby Mainnet
  console.log(window.ethereum.networkVersion)
if (window.ethereum.networkVersion !== chainId) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId:"0x4" }]
        });
      } catch (err) {
        console.log(err)
        if (err.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: ' rinkeby Mainnet',
                chainId: "0x4",
                nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' },
                rpcUrls: ['https://rinkeby.infura.io/v3']
              }
            ]
          });
        }
      }
    }
      // console.error(e)
    
    const web3Modal = new Web3Modal({
      network: "rinkeyby",
      theme: "dark",
      cacheProvider: true
      
    });
    if (CconnectWallet == "Connect") {
      const permissions = await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{
          eth_accounts: {},
        }]
      });

      web3Modal.clearCachedProvider()
      var connection = await web3Modal.connect();
      var provider=new ethers.providers.Web3Provider(connection);
      const userAddress = await provider.getSigner().getAddress()
       var account =userAddress;
       localStorage.setItem("walletDetails", account);
      setWalletAddress(account);
      console.log(account);
      if (account) {
        setconnected(true);
        setCconnectWallet("Disconnect");
        //return toast.info("Connected");
      }
      
    }
      
    else{
      localStorage.setItem("walletDetails", "");
      setCconnectWallet("Connect");
    }
    }

  


  
    return (
      <div>
        <header className={`top-bar ${activeClass}`}>
          <div className='container'>
            <Navbar className='navOuter' light expand="lg">
              <div className='logoBx'>
                <NavbarBrand href="/"><img src={Logo} alt="" /></NavbarBrand>
              </div>
              <div className='navRight'>
                <div className='navRgtInn'>
                  <div className='menuBx'>
                  <NavbarToggler onClick={togglee} />
                  <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink href="#mission">About Us</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#roadmap">road map</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#howit">How it Works</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#tokno">tokenomics</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#team">Team</NavLink>
                      </NavItem>
                      <NavItem className='buytokn' onClick={checkchain}>
                        <SacrificPopup />
                      </NavItem>
                      <NavItem>
                        <NavLink  className='active' onClick={connectwallet}>{CconnectWallet}</NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                  </div>
                </div>
              </div>
            </Navbar>

          </div>
        </header>
      </div>
    );
}
export default Header;