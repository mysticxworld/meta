import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Thankyou from '../thankyou/thankyou'

class SpecificPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Sacrifice</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modalOuter">
          <ModalFooter>
            <Button className='popcloseBtn' onClick={this.toggle}>X</Button>
          </ModalFooter>
          <ModalBody>
              <div className='sacrificBx'>
                <h2>Sacrifice for a Cause</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='scrifiBtn'>
                  <button>1</button>
                  <button>5</button>
                  <button>10</button>
                  <button>15</button>
                  <button>25</button>
                  <button>50</button>
                  <button>100</button>
                </div>
                <div className='scrifValue'>
                  <input type="text" name='name' className='scrifInp' placeholder='Enter Value' />
                </div>
                <div className='scrifValue'>
                  <input type="text" name='name' className='scrifInp' placeholder='Enter Email Address' />
                </div>
                <div className='srcfBtnBx'>
                  <Thankyou />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
              </div>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default SpecificPopup;