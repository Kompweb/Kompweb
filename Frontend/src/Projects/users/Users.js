import React, { useState } from 'react';
import AddUser from './Create';
import UsersList from './Read';
// import { users } from './data';
// import View from './clients/View';

function App() {
  const [usersList, setUsersList] = useState([]);
  // console.log(usersList);

  const onAddUser = (newName, newUsername) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: newName, username: newUsername, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={onAddUser} />
      <div className="client-box">
        <UsersList users={usersList} />
        {/* <View /> */}
      </div>
    </>
  );
}

export default App;
