import React from 'react';
import Modal from 'react-modal';
import '../../styles/usersList.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: 300,
    width: 560,
    display: 'flex',
    // justifyContent: 'space-between',
    flexDirection: 'column',
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        name: '',
        username: '',
      },
      showModal: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.OpenModal = this.OpenModal.bind(this);
    this.CloseModal = this.CloseModal.bind(this);
  }

  OpenModal() {
    this.setState({ showModal: true });
  }

  CloseModal() {
    this.setState({ showModal: false });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, username } = this.state.form;
    const { addRow } = this.props;

    const newUser = {
      name,
      username,
    };

    addRow(newUser);
    this.setState(this.initialState);
  };

  render() {
    return (
      <>
        <button className="userBtn" onClick={this.OpenModal}>
          Trigger Modal
        </button>
        <div>
          <Modal
            style={customStyles}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            ariaHideApp={false}
          >
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  //   value={name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  //   value={username}
                  onChange={this.handleChange}
                />
              </label>
              {/* <input type="submit" value="Submit" /> */}
            </form>
            <button
              className="userBtn"
              type="submit"
              value="Submit"
              onClick={this.CloseModal}
            >
              Submit
            </button>
          </Modal>
        </div>
      </>
    );
  }
}

export default App;
