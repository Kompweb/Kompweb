import React from 'react';
import { Modal } from 'antd';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        username: '',
      },
      isOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { isOpen, onClose } = this.props;

    return (
      <>
        <button
          type="primary"
          onClick={isOpen}
          //   onClick={() => {
          //     isOpen(true);
          //   }}
        >
          Modal here
        </button>
        <Modal open={isOpen} onClose={onClose}>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </>
    );
  }
}

export default NameForm;
