import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const baseURL = "https://jsonplaceholder.typicode.com/users";

function Users() {

  const [users, setUsers] = useState(null);

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
					<td>{user.email}</td>
					<td>{user.gender}</td>
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
        <th><span>id</span></th>
        <th><span>Name</span></th>
        <th><span>Email</span></th>
        <th><span>Gender</span></th>
      </tr>
    </thead>
    <tbody>{renderUsers()}</tbody>
  </table>

</div>
    </div>
	);
}


export default Users;