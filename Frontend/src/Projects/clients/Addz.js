import React from 'react';
import { Button } from 'antd';
import Modal from './UI/Modal';

class Edit extends React.Component {
  state = {
    isOpen: false,
    id: '',
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  // addRow = user => {
  //   const { users } = this.state;
  //   this.setState({ users: [...users, user] });
  // };

  render() {
    const { isOpen, id } = this.state;
    // const { addUser } = this.props;

    return (
      <>
        <Button
          type="primary"
          onClick={() => {
            this.setState({ isOpen: true });
          }}
        >
          Add Uzer
        </Button>
        <Modal
          title="Edit user"
          isOpen={isOpen}
          id={id}
          onClose={this.onClose}
          //   onOk={this.handleSubmit}
          onCancel={this.onClose}
          //   addUser={this.addUser}
          // addRow={this.addRow}
        ></Modal>
      </>
    );
  }
}

export default Edit;
