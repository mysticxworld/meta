import React from 'react';
import {Collapse, Navbar, NavbarToggler,NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logo from '../../../assets/images/logo.png'
import SacrificPopup from '../../pages/home/banner/sacrific-popup/sacrific-popup'
import "./header.scss"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount(){
    window.addEventListener('scroll', () => {
       let activeClass = 'fixed';
       if(window.scrollY === 0){
           activeClass = 'normal';
       }
       this.setState({ activeClass });
    });
}
  render() {
    return (
      <div>
        <header className={`top-bar ${this.state.activeClass}`}>
          <div className='container'>
            <Navbar className='navOuter' light expand="lg">
              <div className='logoBx'>
                <NavbarBrand href="/"><img src={Logo} alt="" /></NavbarBrand>
              </div>
              <div className='navRight'>
                <div className='navRgtInn'>
                  <div className='menuBx'>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
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
                      <NavItem className='buytokn'>
                        <SacrificPopup />
                      </NavItem>
                      <NavItem>
                        <NavLink href="#connect" className='active'>connect</NavLink>
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
}