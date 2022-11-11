// import React, { useState } from 'react';
import React from 'react';

// import Edit from '../clients/Edit';
// import { users } from '../users/features/data';

const Userslist = props => {
  // const [usersList, setUsersList] = useState(users);
  // const [isOpen, setIsOpen] = useState(false);

  // function handleRemove(id) {
  //   // console.log(id);
  //   const newList = usersList.filter(user => user.id !== id);
  //   setUsersList(newList);
  // }
  // const isOpen = useState(false);
  // const onClose = useState(true);

  return (
    <div>
      {/* <Edit 
      onCancel={onClose} 
      isOpen={isOpen} 
      /> */}
      {props.users.map(row => (
        <div key={row.name}>
          <div>
            <h3 label="user">{row.name}</h3>
            <p label="username">{row.username} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Userslist;
