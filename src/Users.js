import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Users() {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState(null);
  const [sorted, setSorted] = useState({ sorted: "name", reversed: false });

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const usersCopy = [...users];
    usersCopy.sort((userA, userB) => {
      const nameA = userA.name;
      const nameB = userB.name;

      if (sorted.reversed) {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });
    setUsers(usersCopy);
  };

  const sortByCity = () => {};

  const sortByUserName = () => {};

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  if (!users) return null;

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{`${user.name}`}</td>
          <td>{user.username}</td>
          <td>{user.address.city}</td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <span>Id</span>
              </th>
              <th onClick={sortByName}>
                <span>Nombre</span>
              </th>
              <th>
                <span>Nombre de Usuario</span>
              </th>
              <th>
                <span>Ciudad</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
