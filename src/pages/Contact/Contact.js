import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardContact from "./Card";
import { selector, fetchContactList } from "../../redux/slices/ContactSlice";
import Layout from "../../components/layout";
import {Head} from "./head";
import ReactPaginate from "react-paginate";
import {MainHead} from "./head/main";

export default function Contact() {
  const dispatch = useDispatch();

  const { contactList, loading } = useSelector(selector);

    const [offset, setOffset] = useState(0);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [contactsData, setBookingsData] = useState([]);

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

    useEffect(() => {
        setPageCount(Math.ceil(contactList.length/perPage))
        setBookingsData(contactList.slice(offset, offset+perPage))
    }, [offset, contactList])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset((selectedPage + 1)*perPage)
    }

  function Header(){
    return(
        <HeaderDiv>
            <div style={{paddingLeft: '2%', width: "18%"}}>Contact</div>
            <div style={{width: "20%"}}>Customer</div>
            <div style={{width: "20%" }}>Subject</div>
            <div style={{width: "20%"}}>Message</div>
            <div style={{width: "10%"}}>Action</div>
        </HeaderDiv>
    )
  }

  function TableContact() {
        return contactsData.map((item, index) => {
          return <CardContact key={item.id} item={item} />;
        });
  }
  return (
        <Layout title="Contacts">
            <MainHead/>
            <Head/>
            <Header/>
            {!loading ? <TableContact/> : <h2>Loading...</h2>}
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
