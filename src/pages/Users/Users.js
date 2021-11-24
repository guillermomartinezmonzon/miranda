import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../components/SideMenu/SideMenu";
import { fetchUsersList, selector } from "../../redux/slices/UsersSlice";
import { getUsers } from "../../utils/getData";

export default function Users() {
  const dispatch = useDispatch();

  const { usersList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);

  function renderTableUsers() {
    return usersList.map((item, index) => {
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
  if (loading) {
    return <p>Loading...</p>;
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
