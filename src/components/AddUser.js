import React, { useState } from 'react';

const UserDataComponent = () => {
  const [userData, setUserData] = useState([
    
  ]);

  const addUser = () => {
    const newId = (userData.length + 1).toString();
    const newUser = {
      id: newId,
      name: "New User",
      Contact: '9876543210',
      password: '54321',
      confirmpwd: '54321'
    };

    setUserData([...userData, newUser]);
  };

  return (
    <div>
      <h2>User Data</h2>
      <button onClick={addUser}>Add User</button>
      <ul>
        {userData.map(user => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Contact: {user.Contact}</div>
            <div>Password: {user.password}</div>
            <div>Confirm Password: {user.confirmpwd}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDataComponent;
