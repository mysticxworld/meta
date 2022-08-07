import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Thankyou extends React.Component {
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
              <div className='thankyouMsg'>
                <h2>Thank you !</h2>
                <p>Thank you for your submission, we will connect you soon </p>
              </div>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default Thankyou;