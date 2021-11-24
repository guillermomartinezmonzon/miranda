import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import { getBookings } from "../../utils/getData";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const populateBookings = async () => {
    const bookings1 = await getBookings();
    setBookings(bookings1);
  };

  useEffect(() => {
    populateBookings();
  }, []);

  function renderTableData() {
    if (!bookings) {
      return <p>Loading...</p>;
    }
    return bookings.map((item, index) => {
      const {
        id,
        guest_name,
        order_date,
        check_in,
        check_out,
        notes,
        room_type,
        status,
      } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{guest_name}</td>
          <td>{order_date}</td>
          <td>{check_in}</td>
          <td>{check_out}</td>
          <td>{notes}</td>
          <td>{room_type}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="bookings-container">
        <h1>Bookings</h1>
        <SideMenu />
        <div className="bookings-container__list">
          <table id="bookings-table">
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// const getData = () => {
//   fetch("data/bookings.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   })
//     .then((res) => {
//       console.log("res:");
//       console.log(res);
//       return res.json();
//     })
//     .then((json) => {
//       console.log("json:");
//       console.log(json);
//       setData(json);
//     });
// };
