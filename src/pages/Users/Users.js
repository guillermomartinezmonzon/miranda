import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import { getUsers } from "../../utils/getData";

export default function Users() {
  const [users, setUsers] = useState([]);

  const populateUsers = async () => {
    setUsers(await getUsers());
  };

  useEffect(() => {
    populateUsers();
  }, []);

  function renderTableUsers() {
    return users.map((item, index) => {
      const { id, user_name, job_desk, schedule, phone, status } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{user_name}</td>
          <td>{job_desk}</td>
          <td>{schedule}</td>
          <td>{phone}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <h1>Users</h1>
      <SideMenu />
      <div className="bookings-container__list">
        <table id="bookings-table">
          <tbody>{renderTableUsers()}</tbody>
        </table>
      </div>
    </div>
  );
}
