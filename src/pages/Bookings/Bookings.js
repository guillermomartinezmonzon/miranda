import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardBooking from "../../components/Cards/CardBooking";
import ModalBooking from "../../components/ModalBooking";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { fetchBookingsList, selector } from "../../redux/slices/BookingsSlice";
import { Container } from "../../styles/Container.styled";
import { PanelContainerStyled } from "../../styles/PanelContainer.styled";

export default function Bookings() {
  const dispatch = useDispatch();

  const { bookingsList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchBookingsList());
  }, []);

  function renderTableData() {
    return bookingsList.map((item, index) => {
      return <CardBooking key={item.id} item={item} />;
    });
  }

  if (loading) {
    return (
      <Container>
        <ModalBooking />
        <SideMenu />
        <PanelContainerStyled>
          <TopMenu />
          <h2>Loading...</h2>
        </PanelContainerStyled>
      </Container>
    );
  }

  return (
    <Container>
      <ModalBooking />
      <SideMenu />
      <PanelContainerStyled>
        <TopMenu />
        {renderTableData()}
      </PanelContainerStyled>
    </Container>
  );
}
