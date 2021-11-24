import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../components/SideMenu/SideMenu";
import { fetchBookingsList, selector } from "../../redux/slices/BookingsSlice";

export default function Bookings() {
  const dispatch = useDispatch();

  const { bookingsList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchBookingsList());
  }, []);

  function renderTableData() {
    if (loading) {
      return <p>Loading...</p>;
    }
    return bookingsList.map((item, index) => {
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
