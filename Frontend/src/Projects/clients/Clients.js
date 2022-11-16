import React, { Component } from 'react';
import '../../styles/usersList.css';
// import { Button } from 'antd';
// import Button from '../users/UI/Button';

// import Addz from './Addz';
// import Addd from './Addd';
// import Adsz from './clients/Adsz';
import AddUser from '../users/Users';
// import AddsUser from './Adds';
// import AddUser from './users/Add';
import View from './View';
import { users } from './data/liszt';

class App extends Component {
  initialState = {
    users,
    results: [],
    query: '',
    isOpen: false,
  };

  state = this.initialState;
  // userList = this.state.userList;
  // setUserList = params => this.setState({ userList: params });

  OpenModal() {
    this.setState({ showModal: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      // this.resetSearch();
      // console.log(prevProps);
    }
  }

  search = event => {
    const { users } = this.state;
    const { value } = event.target;

    this.setState({ query: value });

    const results = users.filter(user => {
      const regex = new RegExp(value, 'gi');
      return user.name.match(regex);
    });

    this.setState({ results });
  };

  resetSearch = () => {
    const { users, query } = this.state;

    const results = users.filter(user => {
      const regex = new RegExp(query, 'gi');
      return user.name.match(regex);
    });

    this.setState({ results });
  };

  getUserById = id => {
    const { users } = this.state;
    const u = users.filter(user => user.name === id);
    return u[0];
  };

  // addRow = newUser => {
  //   const { users } = this.state;
  //   this.setState({ users: users.map(newUser.name, newUser.username) });
  //   console.log(newUser);
  // };

  addRow = user => {
    const { users } = this.state;
    this.setState({ users: [...users, user] });
  };

  updateRow = (id, updatedUser) => {
    const { users } = this.state;
    this.setState({
      users: users.map(user => (user.name === id ? updatedUser : user)),
    });
  };
  deleteRow = id => {
    const { users } = this.state;
    this.setState({
      users: users.filter(user => user.name !== id),
    });
  };

  render() {
    const { users, results, query } = this.state;
    const data = results.length === 0 && !query ? users : results;

    return (
      <>
        <div className="clientsProject">
          <h3>C.R.U.D.</h3>
          <div className="clientHeader">
            <div className="userList">
              {/* <Addd addRow={this.addRow} /> */}
              {/* <Adsz addRow={this.addRow} /> */}
              {/* <Addz /> */}
              {/* <Adds addRow={this.addRow} /> */}
              {/* <AddUser users={userList} /> */}
              <input
                className="clientInput"
                icon="search"
                onChange={this.search}
                placeholder="Search"
              />
              <AddUser addRow={this.addRow} />
              <div className="client-box">
                <View
                  data={data}
                  deleteRow={this.deleteRow}
                  updateRow={this.updateRow}
                  getUserById={this.getUserById}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
