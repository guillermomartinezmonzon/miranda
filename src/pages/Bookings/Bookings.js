import { useDispatch, useSelector } from "react-redux";
import CardBooking from "./Card";
import { fetchBookingsList, selector } from "../../redux/slices/BookingsSlice";
import { useState, useEffect } from "react";
import {Head} from "./head";
import styled from "styled-components";
import ReactPaginate from 'react-paginate';
import Layout from "../../components/layout";

export default function Bookings() {

    const dispatch = useDispatch();
    const { bookingsList, loading } = useSelector(selector);

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [bookingsData, setBookingsData] = useState([]);


    useEffect(() => {
        dispatch(fetchBookingsList());
    }, []);
    useEffect(() => {
        setPageCount(Math.ceil(bookingsList.length/perPage))
        setBookingsData(bookingsList.slice(offset, offset+perPage))
    }, [offset, bookingsList])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset((selectedPage + 1)*perPage)
    }
  
  function Header(){
    return (
        <HeaderDiv>
            <div style={{paddingLeft: '2%', width: "16%"}}>Guest</div>
            <div style={{width: "13%"}}>Order Date</div>
            <div style={{width: "13%" }}>Check In</div>
            <div style={{width: "12%"}}>Check Out</div>
            <div style={{width: "13%"}}>Special Request</div>
            <div style={{width: "10%"}}>Room type</div>
            <div style={{width: "6%"}}>Price</div>
            <div style={{width: "15%"}}>Status</div>
        </HeaderDiv>
    )
  }

  function TableData() {
    return bookingsData.map((item) => {
      return <CardBooking key={item._id} item={item} />;
    });
  }


  if (loading || !bookingsList) {
        return (
            <Layout>
              <h2>Loading...</h2>
            </Layout>
        );
  } else {
      return (
         <Layout title={"Bookings"}>
              <Head/>
              <Header/>
              <TableData/>
              <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </Layout>
      );
  }
}

const HeaderDiv = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    text-align: left;
    background-color: white;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 3px;
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 95%;
    white-space:nowrap;
`
