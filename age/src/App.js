import React, { useState } from "react";
import Adduser from "./Components/Users/Adduser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
