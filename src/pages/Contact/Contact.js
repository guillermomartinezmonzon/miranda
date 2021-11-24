// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../components/SideMenu/SideMenu";
import { selector, setContactList } from "../../redux/ContactSlice";
// import { getContact } from "../../utils/getData";

// import { useDispatch } from "react-redux";
// import { setContactList } from "../redux/ContactSlice";

// export const populateContactList = async () => {
//   const dispatch = useDispatch();
//   dispatch(setContactList(await getContact()));
// };

export default function Contact() {
  //const [contact, setContact] = useState([]);

  const dispatch = useDispatch();

  const { contactList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(setContactList());
  }, []);

  function renderTableContact() {
    return contactList.map((item, index) => {
      const { id, date, customer, comment, status } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{date}</td>
          <td>{customer}</td>
          <td>{comment}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <h1>Contact</h1>
        <SideMenu />
        <div className="bookings-container__list">
          <table id="bookings-table">
            <tbody>{renderTableContact()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
