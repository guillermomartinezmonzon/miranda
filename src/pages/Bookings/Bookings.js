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

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset((selectedPage + 1)*perPage)
    }
  
  function Header(){
    return (
        <HeaderDiv>
            <div style={{marginLeft: 20, width: "222px"}}>Guest</div>
            <div style={{width: "237px"}}>Order Date</div>
            <div style={{width: "227px" }}>Check In</div>
            <div style={{width: "227px"}}>Check Out</div>
            <div style={{width: "240px"}}>Special Request</div>
            <div style={{width: "186px"}}>Room type</div>
            <div style={{width: "126px"}}>Price</div>
            <div style={{width: "206px"}}>Status</div>
            <div style={{width: "40px", marginRight: 20}}></div>
        </HeaderDiv>
    )
  }

  function TableData() {
    useEffect(() => {
        setPageCount(Math.ceil(bookingsList.length/perPage))
        setBookingsData(bookingsList.slice(offset, offset+perPage))
    }, [offset])
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
