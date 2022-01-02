import { useDispatch, useSelector } from "react-redux";
import CardBooking from "./Card";
import ModalBooking from "./Card/ModalBooking";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { fetchBookingsList, selector } from "../../redux/slices/BookingsSlice";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";
import { useEffect } from "react";

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
          <TopMenu title={"Bookings"}/>
          <InContainerStyled>
              {renderTableData()}
          </InContainerStyled>
      </PanelContainerStyled>
    </Container>
  );
}
