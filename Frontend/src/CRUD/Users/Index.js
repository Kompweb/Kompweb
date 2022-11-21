import React, { Component } from 'react';
import '../../styles/usersList.css';
import Add from './components/Add';
import View from './components/View';
import { users } from './components/Data';

class App extends Component {
  initialState = {
    users,
    results: [],
    query: '',
  };

  state = this.initialState;

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

  // resetSearch = () => {
  //   const { users, query } = this.state;

  //   const results = users.filter(user => {
  //     const regex = new RegExp(query, 'gi');
  //     return user.name.match(regex);
  //   });

  //   this.setState({ results });
  // };

  getUserById = id => {
    const { users } = this.state;
    const u = users.filter(user => user.name === id);
    return u[0];
  };

  addRow = user => {
    const { users } = this.state;
    this.setState({ users: [...users, user] });
    // console.log('row added:');
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
              <Add addRow={this.addRow} />

              <div className="client-box">
                <input
                  icon="search"
                  onChange={this.search}
                  placeholder="Search"
                />
                {/* <Add addRow={this.addRow} /> */}

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
